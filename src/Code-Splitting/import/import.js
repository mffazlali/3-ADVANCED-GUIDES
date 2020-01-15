import React,{ Suspense } from 'react';

// import OtherComponent from '../../Lifting/Calculator/Calculator';
const OtherComponent = React.lazy(() => import('../../Lifting/Calculator/Calculator'));
const AnotherComponent = React.lazy(() => import('../../Accessibility/OuterClickExample/OuterClickExample'));

export default function myImport() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}