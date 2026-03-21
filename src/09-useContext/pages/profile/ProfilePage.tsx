import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';

export const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil usuario</h1>
      <hr />

      <div className="w-100">
        <pre className="my-4 overflow-x-scroll">{JSON.stringify(user, null, 2)}</pre>
      </div>

      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
