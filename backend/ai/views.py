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

def load_txt(): 
    file_name = os.path.join(os.path.dirname(__file__), 'output.txt')
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

