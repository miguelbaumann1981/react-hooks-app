import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TasksApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
import { Toaster } from 'sonner';
// import { getUserAction } from './08-use-suspense/api/get-user.action';
// import { ClientInformation } from './08-use-suspense/ClientInformation';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={<h1>Cargando...</h1>}>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
);
