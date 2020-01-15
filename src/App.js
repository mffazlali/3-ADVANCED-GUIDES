import React, { Suspense } from 'react';
import './App.css';
import BlurExample from './Accessibility/BlurExample/BlurExample';
// import MyImport from './Code-Splitting/import/import';
// import('./Code-Splitting/math/math').then(math => {
//   console.log(math.add(1, 3));
// });
import ErrorBoundary from './Code-Splitting/ErrorBoundary/ErrorBoundary';
import DOMcomponents from './ForwardingRefs/DOMcomponents/DOMcomponents';
import HigherOrderComponents from './ForwardingRefs/HigherOrderComponents/HigherOrderComponents';
import CrossCutting from './RenderProps/CrossCutting/CrossCutting';
import PropTypes from './Typechecking/PropTypes/PropTypes';


const Calculator = React.lazy(() => import('./Lifting/Calculator/Calculator'));
const OuterClickExample = React.lazy(() => import('./Accessibility/OuterClickExample/OuterClickExample'));
const CallService = React.lazy(() => import('./Code-Splitting/callService/callService'));
const WithoutContext = React.lazy(() => import('./Context/WithoutContext/WithoutContext'));
const DynamicContext = React.lazy(() => import('./Context/DynamicContext/DynamicContext'));
const UpdatingContext = React.lazy(() => import('./Context/UpdatingContext/UpdatingContext'));


function App() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <Calculator />
            <OuterClickExample />
            <CallService />
            <WithoutContext />
            <DynamicContext />
            <UpdatingContext />
            <DOMcomponents />
            <HigherOrderComponents />
            <CrossCutting />
          </section>
        </Suspense>
        <PropTypes />
      </ErrorBoundary>
      {/* <BlurExample /> */}
    </div>
  );
}

export default App;
