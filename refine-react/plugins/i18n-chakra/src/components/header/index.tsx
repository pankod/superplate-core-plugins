  import { 
    useGetIdentity,
    useGetLocale,
    useSetLocale,
  } from "@refinedev/core";
  import { 
    Box,
    IconButton,
    HStack,
    Text,
    Avatar,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode,
  } from "@chakra-ui/react";
  import { IconMoon, IconSun, IconLanguage } from "@tabler/icons";

  import i18n from "i18n";
  
  type IUser = {
    id: number;
    name: string;
    avatar: string;
};

  export const Header: React.FC = () => {
    const { data: user } = useGetIdentity<IUser>();
    const showUserInfo = user && (user.name || user.avatar);
  
    const { colorMode, toggleColorMode } = useColorMode();

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();
  
    return (
      <Box
          py="2"
          px="4"
          display="flex"
          justifyContent="flex-end"
          gap={2}
          w="full"
          bg="chakra-body-bg"
      >
        {showUserInfo && (
            <HStack>
                <Text size="sm" fontWeight="bold">
                    {user?.name}
                </Text>
                <Avatar size="sm" name={user?.name} src={user?.avatar} />
            </HStack>
          )}
          <Menu>
              <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<IconLanguage />}
                  variant="ghost"
              />
              <MenuList>
                  {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                    <MenuItem
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang);
                      }}
                      value={lang}
                      color={lang === currentLocale ? "green" : undefined}
                      icon={
                        <Avatar
                          src={`/images/flags/${lang}.svg`}
                          h={18}
                          w={18}
                        />
                      }
                    >
                      {lang === "en" ? "English" : "German"}
                    </MenuItem>
                  ))}
              </MenuList>
          </Menu>
          <IconButton
              variant="ghost"
              aria-label="Toggle theme"
              onClick={toggleColorMode}
          >
              <Icon
                  as={colorMode === "light" ? IconMoon : IconSun}
                  w="24px"
                  h="24px"
              />
          </IconButton>
      </Box>
  );
  };    