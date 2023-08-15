import renderer from "react-test-renderer";

import App from "../App";

test("renders learn react link", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="ant-layout css-dev-only-do-not-override-byeoj0"
      style={{}}
    >
      <header
        className="ant-layout-header custom-header css-dev-only-do-not-override-byeoj0"
      >
        <p>
          REACT
        </p>
      </header>
      <main
        className="ant-layout-content css-dev-only-do-not-override-byeoj0"
        style={
          {
            "color": "#fff",
            "lineHeight": "120px",
            "minHeight": 120,
            "paddingInline": 56,
          }
        }
      >
        <div
          className="ant-row ant-row-center css-dev-only-do-not-override-byeoj0"
          style={
            {
              "marginBottom": -4,
              "marginLeft": -8,
              "marginRight": -8,
              "marginTop": -4,
            }
          }
        >
           
          <div
            className="ant-col css-dev-only-do-not-override-byeoj0"
            style={
              {
                "paddingBottom": 4,
                "paddingLeft": 8,
                "paddingRight": 8,
                "paddingTop": 4,
              }
            }
          >
            <button
              className="ant-btn css-dev-only-do-not-override-byeoj0 ant-btn-default selected"
              disabled={false}
              onClick={[Function]}
              style={{}}
              type="button"
            >
              <span>
                Hot
              </span>
            </button>
             
          </div>
          <div
            className="ant-col css-dev-only-do-not-override-byeoj0"
            style={
              {
                "paddingBottom": 4,
                "paddingLeft": 8,
                "paddingRight": 8,
                "paddingTop": 4,
              }
            }
          >
            <button
              className="ant-btn css-dev-only-do-not-override-byeoj0 ant-btn-default button"
              disabled={false}
              onClick={[Function]}
              style={{}}
              type="button"
            >
              <span>
                News
              </span>
            </button>
             
          </div>
          <div
            className="ant-col css-dev-only-do-not-override-byeoj0"
            style={
              {
                "paddingBottom": 4,
                "paddingLeft": 8,
                "paddingRight": 8,
                "paddingTop": 4,
              }
            }
          >
            <button
              className="ant-btn css-dev-only-do-not-override-byeoj0 ant-btn-default button"
              disabled={false}
              onClick={[Function]}
              style={{}}
              type="button"
            >
              <span>
                Rising
              </span>
            </button>
          </div>
        </div>
        <div
          className="ant-divider css-dev-only-do-not-override-byeoj0 ant-divider-horizontal"
          role="separator"
          style={{}}
        />
        <div
          className="ant-row ant-row-center ant-row-middle css-dev-only-do-not-override-byeoj0"
          style={
            {
              "marginTop": "20%",
            }
          }
        >
          <div
            aria-busy={true}
            aria-live="polite"
            className="ant-spin ant-spin-lg ant-spin-spinning css-dev-only-do-not-override-byeoj0"
            style={{}}
          >
            <span
              aria-label="loading"
              className="anticon anticon-loading anticon-spin ant-spin-dot"
              role="img"
              style={
                {
                  "color": "#6324c6",
                  "fontSize": 50,
                }
              }
            >
              <svg
                aria-hidden="true"
                data-icon="loading"
                fill="currentColor"
                focusable="false"
                height="1em"
                viewBox="0 0 1024 1024"
                width="1em"
              >
                <path
                  d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                />
              </svg>
            </span>
          </div>
        </div>
      </main>
    </div>
  `);
});
