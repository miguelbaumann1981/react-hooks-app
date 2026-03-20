import { useCallback, useState } from 'react';
import { MySubtitle } from './ui/MySubtitle';
import { MyTitle } from './ui/MyTitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubtitle] = useState('mundo');

  const handleMyAPIcall = useCallback(() => {
    console.log('Llamar a API -', subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPIcall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello ' + new Date().getTime())}
      >
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle('world! ' + new Date().getTime())}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
