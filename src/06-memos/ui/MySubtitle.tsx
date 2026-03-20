import { memo } from 'react';

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}

export const MySubtitle = memo(({ subtitle, callMyAPI }: Props) => {
  console.log('MySubtitle re-render');
  return (
    <>
      <h6 className="text-2xl">{subtitle}</h6>
      <button
        className="bg-green-500 text-white px-2 py-2 rounded-md cursor-pointer"
        onClick={callMyAPI}
      >
        Llamar a función
      </button>
    </>
  );
});
