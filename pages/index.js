import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <title>Apis.cloudyyuw</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\n    ",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            background-color: #1B1D2C;\n            font-family: 'Roboto', sans-serif;\n            color: white;\n        }\n\n        .footer img {\n            margin-left: 0.5rem;\n        }\n\n        .logo {\n            height: 1em;\n        }\n\n        .footer a {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n    ",
        }}
      />
      <div className="pusher">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <br />
              <img
                style={{ verticalAlign: "middle" }}
                width="90px"
                height="90px"
                src="data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 122.88 104.36' style='enable-background:new 0 0 122.88 104.36' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st %7B fill-rule: evenodd; clip-rule: evenodd; fill: %235D9CF1; %7D %3C/style%3E%3Cg%3E%3Cpath class='st' d='M47.07,96.74c1.83,0,3.32,1.65,3.32,3.68c0,2.03-1.48,3.68-3.32,3.68h-9.35c-1.83,0-3.32-1.65-3.32-3.68 c0-2.03,1.48-3.68,3.32-3.68H47.07L47.07,96.74z M14.3,67.94c1.56,1.3,1.76,3.62,0.46,5.18c-1.3,1.56-3.62,1.76-5.18,0.46 c-1.68-1.4-3.15-2.99-4.4-4.72C1.84,64.25,0.04,58.63,0,53.03c-0.04-5.66,1.72-11.29,5.52-15.85c1.23-1.48,2.68-2.84,4.34-4.04 c1.93-1.4,4.14-2.58,6.64-3.55c1.72-0.67,3.56-1.23,5.5-1.68c2.2-8.74,6.89-15.47,12.92-20.14c5.64-4.37,12.43-6.92,19.42-7.59 c6.96-0.67,14.12,0.51,20.55,3.6c7.02,3.37,13.14,8.98,17.11,16.87c1.6-0.25,3.2-0.38,4.79-0.36c6.72,0.05,13.2,2.45,18.3,7.95 c1.07,1.15,2.08,2.45,3.02,3.9c3.2,4.92,4.84,11.49,4.77,17.92c-0.07,6.31-1.77,12.59-5.25,17.22c-1.22,1.62-3.52,1.95-5.14,0.73 c-1.62-1.22-1.95-3.52-0.73-5.14c2.5-3.33,3.73-8.04,3.78-12.87c0.06-5.07-1.18-10.16-3.59-13.86c-0.69-1.07-1.45-2.03-2.25-2.89 c-3.61-3.89-8.19-5.59-12.95-5.62c-3.46-0.02-7.02,0.81-10.41,2.31c-0.75,0.37-1.5,0.77-2.25,1.21c-2.25,1.32-4.47,2.93-6.74,4.78 l-4.84-5.54c1.67-1.55,3.48-2.96,5.4-4.21c1.53-1,3.13-1.88,4.77-2.65c0.66-0.33,1.33-0.64,2-0.93c-3.19-5.65-7.78-9.7-12.98-12.2 c-5.2-2.49-11.02-3.45-16.69-2.9c-5.63,0.54-11.1,2.59-15.62,6.1c-5.23,4.06-9.2,10.11-10.73,18.14l-0.48,2.51l-2.5,0.44 c-2.45,0.43-4.64,1.02-6.56,1.77c-1.86,0.72-3.52,1.61-4.97,2.66c-1.16,0.84-2.16,1.78-3.01,2.8c-2.63,3.15-3.85,7.1-3.82,11.1 c0.03,4.06,1.35,8.16,3.79,11.53C12.04,65.79,13.1,66.94,14.3,67.94L14.3,67.94z M32.27,72.03c-1.49,0-2.69-1.65-2.69-3.68 c0-2.03,1.2-3.68,2.69-3.68h66.56c1.49,0,2.69,1.65,2.69,3.68c0,2.03-1.2,3.68-2.69,3.68H32.27L32.27,72.03z M20.38,87.54 c-1.83,0-3.32-1.65-3.32-3.68s1.48-3.68,3.32-3.68H72.9c1.83,0,3.32,1.65,3.32,3.68s-1.48,3.68-3.32,3.68H20.38L20.38,87.54z M89.4,87.54c-1.83,0-3.32-1.65-3.32-3.68s1.48-3.68,3.32-3.68h11.82c1.83,0,3.32,1.65,3.32,3.68s-1.48,3.68-3.32,3.68H89.4 L89.4,87.54z M109.27,97.03c1.82,0.01,3.3,1.66,3.29,3.68c-0.01,2.03-1.49,3.66-3.32,3.66l-46.97-0.27 c-1.82-0.01-3.3-1.66-3.29-3.68c0.01-2.03,1.49-3.66,3.32-3.66L109.27,97.03L109.27,97.03z' /%3E%3C/g%3E%3C/svg%3E"
              />
              &nbsp;{" "}
              <span style={{ display: "inline", verticalAlign: "middle" }}>
                <b>Apis.cloudyyuw</b>
              </span>
              <br />
              <br />
              <div
                className="ui inverted compact very padded segment"
                style={{ backgroundColor: "#1B1D2C" }}
              >
                {/* <h3 class="ui horizontal divider header" style="font-size: 25px;">Apis</h3>*/}
                <p style={{ fontSize: 35 }}>Just a simple API in development</p>
                <span style={{ fontSize: 30 }}>Quick and simple to use.</span>
                <br />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img
                width={350}
                height={350}
                src="data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 120.49 122.88' style='enable-background:new 0 0 120.49 122.88' xml:space='preserve'%3E%3Cstyle type='text/css'%3E.st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:transparent;%7D .st1%7Bfill:%235D9CF1;%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M33.76,62.78h-0.98c0-8.04-3.01-15.06-9.01-21.07c-6-6-13.03-9.01-21.07-9.01v-0.98 c8.04,0,15.07-3.01,21.07-9.02c6-6.03,9.01-13.06,9.01-21.07h0.98c0,8.04,3.01,15.07,9.01,21.07c6,6,13.03,9.01,21.07,9.01v0.98 c-8.04,0-15.07,3.01-21.07,9.01C36.77,47.72,33.76,54.74,33.76,62.78L33.76,62.78L33.76,62.78z M15.89,99.59h-0.45 c0-3.68-1.38-6.91-4.14-9.66c-2.75-2.75-5.98-4.14-9.66-4.14v-0.45c3.68,0,6.91-1.38,9.66-4.14c2.75-2.76,4.14-5.98,4.14-9.65h0.45 c0,3.68,1.38,6.91,4.14,9.66c2.75,2.75,5.97,4.14,9.66,4.14v0.45c-3.68,0-6.91,1.38-9.66,4.14C17.26,92.68,15.89,95.91,15.89,99.59 L15.89,99.59L15.89,99.59z M62.44,121.24h-0.45c0-3.68-1.38-6.91-4.14-9.66c-2.75-2.75-5.97-4.14-9.66-4.14v-0.45 c3.68,0,6.91-1.38,9.66-4.14c2.75-2.76,4.14-5.98,4.14-9.65h0.45c0,3.68,1.38,6.91,4.14,9.66c2.75,2.75,5.97,4.14,9.66,4.14v0.45 c-3.68,0-6.91,1.38-9.66,4.14C63.82,114.33,62.44,117.55,62.44,121.24L62.44,121.24L62.44,121.24z M93.6,87.19h-0.82 c0-6.74-2.52-12.64-7.56-17.68c-5.04-5.04-10.93-7.56-17.68-7.56v-0.82c6.74,0,12.64-2.52,17.68-7.57 c5.04-5.05,7.56-10.95,7.56-17.67h0.82c0,6.74,2.52,12.64,7.56,17.68c5.04,5.04,10.93,7.56,17.68,7.56v0.82 c-6.74,0-12.64,2.52-17.68,7.56C96.13,74.55,93.6,80.45,93.6,87.19L93.6,87.19L93.6,87.19z'/%3E%3Cpath class='st1' d='M33.76,64.42h-0.98c-0.9,0-1.64-0.73-1.64-1.64c0-3.8-0.71-7.36-2.12-10.66c-1.42-3.31-3.55-6.4-6.41-9.25 l-0.08-0.09c-2.83-2.81-5.89-4.92-9.17-6.33c-3.3-1.41-6.86-2.12-10.66-2.12c-0.9,0-1.64-0.73-1.64-1.64v-0.98 c0-0.9,0.73-1.64,1.64-1.64c3.8,0,7.36-0.71,10.66-2.12c3.32-1.42,6.4-3.56,9.25-6.41c2.85-2.87,4.99-5.96,6.41-9.28 c1.41-3.3,2.12-6.85,2.12-10.63c0-0.9,0.73-1.64,1.64-1.64h0.98c0.9,0,1.64,0.73,1.64,1.64c0,3.8,0.71,7.36,2.12,10.66 c1.42,3.31,3.55,6.4,6.41,9.25c2.86,2.86,5.94,5,9.25,6.41c3.3,1.41,6.85,2.12,10.66,2.12c0.9,0,1.64,0.73,1.64,1.64v0.98 c0,0.9-0.73,1.64-1.64,1.64c-3.8,0-7.36,0.71-10.66,2.12c-3.31,1.42-6.4,3.55-9.25,6.41l-0.08,0.08c-2.81,2.84-4.92,5.9-6.33,9.19 c-1.41,3.3-2.12,6.86-2.12,10.66C35.4,63.69,34.66,64.42,33.76,64.42L33.76,64.42z M32.03,50.85c0.49,1.14,0.9,2.31,1.24,3.5 c0.34-1.19,0.75-2.36,1.24-3.51c1.57-3.67,3.91-7.08,7.02-10.21l0.09-0.09c3.15-3.15,6.58-5.51,10.29-7.1 c1.14-0.49,2.31-0.9,3.5-1.24c-1.19-0.34-2.36-0.75-3.5-1.24c-3.71-1.59-7.14-3.96-10.29-7.1s-5.51-6.58-7.1-10.29 c-0.49-1.15-0.91-2.32-1.25-3.52c-0.34,1.19-0.75,2.35-1.24,3.49c-1.58,3.7-3.95,7.14-7.1,10.31c-3.15,3.16-6.58,5.53-10.29,7.12 c-1.15,0.49-2.32,0.91-3.51,1.24c1.19,0.34,2.36,0.75,3.51,1.24c3.67,1.57,7.07,3.91,10.2,7.02l0.09,0.09 C28.07,43.7,30.44,47.14,32.03,50.85L32.03,50.85z M15.89,101.23h-0.45c-0.9,0-1.64-0.73-1.64-1.64c0-1.62-0.3-3.14-0.9-4.54 c-0.6-1.41-1.52-2.74-2.76-3.97c-1.23-1.23-2.56-2.15-3.97-2.76c-1.4-0.6-2.92-0.9-4.54-0.9C0.73,87.43,0,86.7,0,85.79v-0.45 c0-0.9,0.73-1.64,1.64-1.64c1.62,0,3.14-0.3,4.54-0.9c1.41-0.6,2.73-1.52,3.97-2.76l0.08-0.08c1.19-1.21,2.08-2.51,2.68-3.9 c0.6-1.4,0.9-2.91,0.9-4.53c0-0.9,0.73-1.64,1.64-1.64h0.45c0.9,0,1.64,0.73,1.64,1.64c0,1.62,0.3,3.14,0.9,4.54 c0.6,1.41,1.52,2.73,2.75,3.97s2.55,2.15,3.96,2.76c1.4,0.6,2.92,0.9,4.54,0.9c0.9,0,1.64,0.73,1.64,1.64v0.45 c0,0.9-0.73,1.64-1.64,1.64c-1.62,0-3.14,0.3-4.54,0.9c-1.41,0.6-2.73,1.52-3.97,2.76l-0.09,0.08c-1.19,1.2-2.08,2.49-2.67,3.87 c-0.6,1.4-0.9,2.92-0.9,4.55C17.53,100.49,16.79,101.23,15.89,101.23L15.89,101.23z M12.46,88.77c1.37,1.37,2.44,2.86,3.2,4.47 c0.75-1.57,1.79-3.02,3.13-4.37l0.08-0.09c1.37-1.37,2.86-2.44,4.47-3.2c-1.61-0.77-3.1-1.84-4.47-3.21 c-1.37-1.37-2.44-2.87-3.21-4.48c-0.75,1.56-1.79,3.02-3.11,4.37l-0.09,0.1c-1.37,1.37-2.86,2.44-4.47,3.21 C9.59,86.33,11.09,87.4,12.46,88.77L12.46,88.77z M62.44,122.88h-0.45c-0.9,0-1.64-0.73-1.64-1.64c0-1.62-0.3-3.14-0.9-4.54 c-0.6-1.41-1.52-2.73-2.76-3.97l-0.08-0.08c-1.21-1.19-2.5-2.08-3.89-2.67c-1.4-0.6-2.92-0.9-4.54-0.9c-0.9,0-1.64-0.73-1.64-1.64 v-0.45c0-0.9,0.73-1.64,1.64-1.64c1.62,0,3.14-0.3,4.54-0.9c1.41-0.6,2.74-1.52,3.97-2.76l0.08-0.08c1.19-1.21,2.08-2.51,2.68-3.9 c0.6-1.4,0.9-2.91,0.9-4.53c0-0.9,0.73-1.64,1.64-1.64h0.45c0.9,0,1.64,0.73,1.64,1.64c0,1.62,0.3,3.14,0.9,4.54 c0.6,1.41,1.52,2.73,2.75,3.97c1.23,1.23,2.55,2.15,3.96,2.76c1.4,0.6,2.92,0.9,4.54,0.9c0.9,0,1.64,0.73,1.64,1.64v0.45 c0,0.9-0.73,1.64-1.64,1.64c-1.62,0-3.14,0.3-4.54,0.9c-1.41,0.6-2.73,1.52-3.97,2.76l-0.09,0.08c-1.19,1.2-2.08,2.49-2.67,3.87 c-0.6,1.4-0.9,2.91-0.9,4.54C64.08,122.15,63.35,122.88,62.44,122.88L62.44,122.88z M59.01,110.42c1.37,1.37,2.44,2.86,3.2,4.47 c0.75-1.57,1.79-3.02,3.13-4.37l0.08-0.09c1.37-1.37,2.86-2.44,4.47-3.2c-1.61-0.77-3.1-1.84-4.47-3.21 c-1.37-1.37-2.44-2.87-3.21-4.48c-0.75,1.56-1.79,3.02-3.11,4.37l-0.09,0.1c-1.37,1.37-2.86,2.44-4.47,3.2 c1.57,0.75,3.03,1.79,4.37,3.12L59.01,110.42L59.01,110.42z M93.6,88.82h-0.82c-0.9,0-1.64-0.73-1.64-1.64 c0-3.15-0.59-6.1-1.76-8.84c-1.17-2.75-2.95-5.31-5.33-7.69c-2.38-2.38-4.94-4.15-7.68-5.33c-2.73-1.17-5.68-1.76-8.84-1.76 c-0.9,0-1.64-0.73-1.64-1.64v-0.82c0-0.9,0.73-1.64,1.64-1.64c3.16,0,6.1-0.59,8.84-1.76c2.75-1.18,5.31-2.96,7.68-5.33 c2.37-2.38,4.15-4.95,5.33-7.7c1.17-2.74,1.76-5.68,1.76-8.82c0-0.9,0.73-1.64,1.64-1.64h0.82c0.9,0,1.64,0.73,1.64,1.64 c0,3.15,0.59,6.1,1.76,8.84c1.18,2.75,2.95,5.32,5.32,7.69c2.37,2.37,4.93,4.15,7.69,5.32c2.74,1.17,5.68,1.76,8.84,1.76 c0.9,0,1.64,0.73,1.64,1.64v0.82c0,0.9-0.73,1.64-1.64,1.64c-3.15,0-6.1,0.59-8.84,1.76c-2.75,1.18-5.32,2.95-7.69,5.32 c-2.37,2.38-4.15,4.94-5.32,7.69c-1.17,2.74-1.76,5.68-1.76,8.84C95.24,88.09,94.51,88.82,93.6,88.82L93.6,88.82z M92.39,77.07 c0.3,0.7,0.57,1.42,0.8,2.14c0.23-0.72,0.5-1.44,0.8-2.14c1.35-3.15,3.35-6.06,6.02-8.72c2.68-2.67,5.58-4.67,8.72-6.02 c0.7-0.3,1.41-0.57,2.14-0.8c-0.72-0.23-1.44-0.5-2.14-0.8c-3.14-1.34-6.04-3.35-8.71-6.02l-0.01-0.01 c-2.67-2.67-4.67-5.57-6.02-8.71c-0.3-0.7-0.57-1.42-0.8-2.15c-0.23,0.72-0.5,1.43-0.8,2.13c-1.34,3.14-3.35,6.05-6.02,8.72 c-2.67,2.68-5.58,4.69-8.72,6.03c-0.7,0.3-1.42,0.57-2.14,0.8c0.72,0.23,1.44,0.5,2.14,0.8c3.15,1.35,6.05,3.35,8.72,6.02 C89.04,71.01,91.05,73.92,92.39,77.07L92.39,77.07z'/%3E%3C/g%3E%3C/svg%3E"
              />
            </div>
            <div className="eight wide column">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                className="ui inverted compact very padded segment"
                style={{ backgroundColor: "#1B1D2C" }}
              >
                <b style={{ fontSize: 25 }}>Endpoints:</b>
                <div className="ui inverted list">
                  <div className="item">
                    <i className="code icon" />
                    <div className="content">
                      <div className="header">GET</div>
                      <div className="description">
                        <a href="https://apis.cloudyyuw.vercel.app/api">
                          GET request routes
                        </a>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                <i className="key icon" />
                <b>Key:</b> You can get your API key{" "}
                <a href="https://apis.cloudyyuw.vercel.app/register.html">here</a>
                , and use: &amp;key=api-key
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <footer className="footer">
        <div
          className="ui inverted segment"
          style={{ backgroundColor: "transparent" }}
        >
          <a
            style={{ color: "white" }}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <img
              src="https://apis.cloudyyuw.vercel.app/vercel.svg"
              alt="Vercel Logo"
              className="logo"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
