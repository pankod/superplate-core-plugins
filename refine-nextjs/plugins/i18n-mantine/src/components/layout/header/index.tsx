<%_ if (answers["mantine-dark-mode"] === "mantine-dark-mode") { _%>
    import { useRouter } from "next/router";
    import NextRouter from "@pankod/refine-nextjs-router";
    import {
        useGetIdentity,
        useGetLocale,
        useSetLocale,
      } from "@pankod/refine-core";
      import {
        ActionIcon,
        Group,
        MantineHeader,
        Title,
        Avatar,
        useMantineColorScheme,
        Menu,
      } from "@pankod/refine-mantine";
      import { IconSun, IconMoonStars, IconLanguage } from "@tabler/icons";
      
    
      export const Header: React.FC = () => {
        const { data: user } = useGetIdentity();
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
<%_ } else { _%>
    import { useRouter } from "next/router";
    import {
        useGetIdentity,
        useGetLocale,
      } from "@pankod/refine-core";
      import {
        ActionIcon,
        Group,
        MantineHeader,
        Title,
        Avatar,
        Menu,
      } from "@pankod/refine-mantine";
      import { IconLanguage } from "@tabler/icons";
      
      export const Header: React.FC = () => {
        const { data: user } = useGetIdentity();
        const showUserInfo = user && (user.name || user.avatar);
      
        const locale = useGetLocale();
        const currentLocale = locale();
      
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
<%_ } _%>