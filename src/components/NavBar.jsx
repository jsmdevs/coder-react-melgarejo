import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {

    return (
        <>
            <Flex>
                <Box p='4'>
                    TiendAll
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Inicio
                        Productos
                        Contacto
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Celulares</MenuItem>
                        <MenuItem>Computación</MenuItem>
                        <MenuItem>Accesorios</MenuItem>
                        <MenuItem>Audio y video</MenuItem>
                        <MenuItem>Otros</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </>
    )
}

export default NavBar