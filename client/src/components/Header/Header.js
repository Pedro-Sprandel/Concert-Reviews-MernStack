import React from 'react';
import { Box, Divider, Flex, Link, Text } from '@chakra-ui/react';
import { colors } from '../../utils';

export const Header = () => {
    return (
        <Flex bg={colors.neutral} justifyContent="space-between" p="8">
            <Text color={colors.light}>Header</Text>
            <Flex color={colors.light} align="center" gap="4">
                <Link href="https://google.com">Login</Link>
                <Divider orientation="vertical" />
                <Link border="1px solid" rounded="lg" px="2" py="1" href="https://google.com">
                    <Text>Sign Up</Text>
                </Link>
            </Flex>
        </Flex>
    )
}
