import * as React from 'react';

export interface BodyProps {
  mainStyle: React.CSSProperties;
}

export class Body extends React.Component<BodyProps, {}> {
  constructor(props: BodyProps) {
    super(props);
  }

  public render() {
    return (
      <section id="main" className="main">
        <div className="bg">
          <div className="container">
            <div className="banner">
              <h1>Get paid for giving a shit.</h1>
            </div>
          </div>
        </div>
        <div className="text-container">
          <div className="container">
            <h1>Get paid for giving a shit.</h1>
            <p className="text">
              Aute Lorem commodo ipsum dolore laborum enim laborum commodo et
              ea. Aliquip elit velit aliquip in ex laboris consectetur sit
              proident esse cillum. Minim duis ad Lorem excepteur consectetur
              commodo fugiat. Enim consectetur duis ut culpa voluptate labore
              anim eu dolor deserunt non veniam est. Aute fugiat ea nisi eiusmod
              anim ex est et exercitation dolore sint in. Labore magna ullamco
              do dolor sint consectetur. Cillum qui ex do dolor irure magna sint
              ea dolor nulla ad proident aliqua nostrud.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
