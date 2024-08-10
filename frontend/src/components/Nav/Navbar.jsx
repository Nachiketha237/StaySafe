import { Flex, UnorderedList as Ul, ListItem as Li, Text,Button } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import themes  from "../../utils/theme";


const Navbar = () => {
    return (
        
        <Flex
            width="100vw"
            height={16}
            p={4}
            backgroundColor={themes.colors.primary['300']}
            justifyContent="space-between"
            alignItems={"center"}
            rounded="xl"
            shadow="md"
            margin={1}
        >
            
            <Flex justifyContent={"flex-start"} alignItems={'center'}>
            <Text fontSize="3xl" fontWeight="bold" color={themes.colors.neutral['700']} _hover={{color:themes.colors.neutral['1000']}} marginLeft={5} justifyContent={'center'}>
                StaySafe
            </Text>
            </Flex>

            <Ul listStyleType="none" display="flex" gap={8} minWidth={6} marginRight={3} color={themes.colors.neutral['700']} >
                <Li _hover={{color:themes.colors.neutral['1000']}} fontSize={20}>
                    <NavLink to="/"  >
                    Dashboard
                    </NavLink>
                </Li>
                <Li _hover={{color:themes.colors.neutral['1000']}} fontSize={20}>
                    <NavLink to="/blogs"  >
                       Blogs
                    </NavLink>
                </Li>
                <Li _hover={{color:themes.colors.neutral['1000']}} fontSize={20}>
                    <NavLink to="/volunteer"  >
                        Volunteer
                    </NavLink>
                </Li>
                <Li _hover={{color:themes.colors.neutral['1000']}} fontSize={20}>
                    <NavLink to="/announcement"  >
                       Announcements
                    </NavLink>
                </Li>
                <Li  >
                    {/* <Button 
                    _hover={{ color: themes.colors.neutral['1000'] }}
                     variant="link" onClick={handleClick} 
                     fontSize={20} 
                     color= {themes.colors.neutral['700']}
                     style={{ padding: 0 }}>
                        Logout
                    </Button> */}
                </Li>
            </Ul>
        </Flex>
    );
}

export default Navbar;