import React from 'react';
import {  Divider, Flex, Link, Text, useColorMode } from '@chakra-ui/react';
import colors from '../../styles/colors';
import { useTheme } from '../../styles/useTheme';

export const Header = () => {
    const { neutral, secondary, light } = useTheme();
    
    return (
        <Flex bg={neutral} justifyContent="space-between" py="8" px="32">
            <Text color={secondary} fontSize="2xl" fontWeight="semibold">Tambourine</Text>
            <Flex color={secondary} align="center" gap="4">
                <Link href="https://google.com">Login</Link>
                <Divider orientation="vertical" />
                <Link border="1px solid" rounded="lg" px="2" py="1" href="https://google.com">
                    <Text>Sign Up</Text>
                </Link>
            </Flex>
        </Flex>
    )
}
