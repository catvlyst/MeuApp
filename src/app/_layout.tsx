import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D71920',
        tabBarInactiveTintColor: '#000000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categorias"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="carrinho"
        options={{
        href: null,
        tabBarStyle: { display: 'none' },
        }}
      />
      {/* Esconde as telas antigas */}
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="produtos"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="produto/[id]"
        options={{
          href: null,
        }}
      />

      {/* Perfil e login não ficam nos botões de baixo, são acessados pelo ícone de usuário */}
      <Tabs.Screen
        name="perfil"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
    </Tabs>

  );
}
