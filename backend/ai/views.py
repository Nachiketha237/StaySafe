from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import TextLoader
from langchain_google_genai import ChatGoogleGenerativeAI
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import json

def load_txt(): 
    file_name = os.path.join(os.path.dirname(__file__), './output.txt')
    loaders = [TextLoader(file_name, encoding="utf8")]

    index = VectorstoreIndexCreator(
        embedding=HuggingFaceEmbeddings(model_name='all-MiniLM-L12-v2'), 
        text_splitter=RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    ).from_loaders(loaders)

    return index

# Load the index once at startup
index = load_txt()
GOOGLE_API_KEY = 'AIzaSyCZnH6Uc95wMAQLlRUuE2Kbf56nVL_Iz9U'
llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-flash-001", google_api_key=GOOGLE_API_KEY)
chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type='stuff',
    retriever=index.vectorstore.as_retriever(),
    input_key='question'
)

def query(request):
    question = request.GET.get('question')
    if not question:
        return JsonResponse({'error': 'No question provided'}, status=400)

    response = chain.run({"question": question})
    return JsonResponse({'response': response})


def predict_flood(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        # Sample data for training
        x = pd.read_csv("./kerala.csv")
        y1 = list(x["YEAR"])
        x1 = list(x["Jun-Sep"])
        z1 = list(x["JUN"])
        w1 = list(x["MAY"])

        flood = []
        june = []
        sub = []

        for i in range(len(x1)):
            flood.append(1 if x1[i] > 2400 else 0)
            june.append(z1[i] / 3)
            sub.append(abs(w1[i] - z1[i]))

        x["flood"] = flood
        x["avgjune"] = june
        x["sub"] = sub

        X = x.iloc[:, [16, 20, 21]].values
        y = x.iloc[:, 19].values

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

        scaler = StandardScaler()
        X_train = scaler.fit_transform(X_train)
        X_test = scaler.transform(X_test)

        Lr = LogisticRegression()
        Lr.fit(X_train, y_train)

        features = [
            [data['q1'], data['w1'], data['e1']],
            [data['q2'], data['w2'], data['e2']],
            [data['q3'], data['w3'], data['e3']]
        ]

        features = scaler.transform(features)
        predictions = Lr.predict(features)

        results = []
        for prediction in predictions:
            if prediction == 1:
                results.append("Possibility of severe flood")
            else:
                results.append("No chance of severe flood")

        return JsonResponse({'predictions': results})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)