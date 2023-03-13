    import { useRouter } from "next/router";
    import NextRouter from "@refinedev/nextjs-router";
    import {
        useGetIdentity,
        useGetLocale,
        useSetLocale,
      } from "@refinedev/core";
      import {
        ActionIcon,
        Group,
        Header as MantineHeader,
        Title,
        Avatar,
        Menu,
        useMantineColorScheme
      } from "@mantine/core";
      import { IconSun, IconMoonStars, IconLanguage } from "@tabler/icons";
      
       interface IUser {
    name: string;
    avatar: string;
  }
    
      export const Header: React.FC = () => {
        const { data: user } = useGetIdentity<IUser>();
        const showUserInfo = user && (user.name || user.avatar);
      
        const { colorScheme, toggleColorScheme } = useMantineColorScheme();
        const dark = colorScheme === "dark";
      
        const locale = useGetLocale();
        const currentLocale = locale();
        
        const { locales } = useRouter();
      
        return (
          <MantineHeader height={50} p="xs">
            <Group position="right">
              <Menu shadow="md">
                <Menu.Target>
                  <ActionIcon variant="outline">
                    <IconLanguage size={18} />
                  </ActionIcon>
                </Menu.Target>
      
                <Menu.Dropdown>
                  {[...(locales ?? [])].sort().map((lang: string) => (
                    <Menu.Item
                      key={lang}
                      component={NextRouter.Link}
                      href="/" 
                      locale={lang}
                      color={lang === currentLocale ? "primary" : undefined}
                      icon={
                        <Avatar
                          src={`/images/flags/${lang}.svg`}
                          size={18}
                          radius="lg"
                        />
                      }
                    >
                      {lang === "en" ? "English" : "German"}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
              <ActionIcon
                variant="outline"
                color={dark ? "yellow" : "primary"}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ActionIcon>
              {showUserInfo && (
                <Group spacing="xs">
                  <Title order={6}>{user?.name}</Title>
                  <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
                </Group>
              )}
            </Group>
          </MantineHeader>
        );
      };      
