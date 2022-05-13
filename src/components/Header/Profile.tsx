import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
          { showProfileData && (
            <Box mr="4" textAlign="right">
              <Text>Andre Heringer</Text>
              <Text color="gray.300" fontSize="small">
                andrew.heringer@gmail.com
              </Text>
            </Box>
          )}

          <Avatar size="md" name="Andre Heringer" src="https://github.com/ykhost.png" />

        </Flex>
  )
}
