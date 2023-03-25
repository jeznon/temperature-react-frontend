import * as React from 'react';
const Humidity = ({ humidity, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 30.807 42.698"
    {...props}
  >
    <defs>
      <linearGradient id="gota_svg__a">
        <stop
          offset={0}
          style={{
            stopColor: '#9d2bb8',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#9e21c3',
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#gota_svg__a"
        id="gota_svg__b"
        x1={116.731}
        x2={116.75}
        y1={99.404}
        y2={76.3}
        gradientTransform="matrix(.93923 0 0 .91943 67.957 -33.781)"
        gradientUnits="userSpaceOnUse"
      />
      <path id="gota_svg__c" d="M281.736 397.169h82.663v53.037h-82.663z" />
    </defs>
    <path
      d="M193.59 56.275c.194 7.472-6.895 13.533-15.4 13.533-8.507 0-15.415-6.059-15.402-13.533.02-12.382 12.798-29.166 15.165-29.166 2.765 0 15.317 16.776 15.638 29.166z"
      style={{
        fill: '#2b56b8',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 0.376999,
        strokeLinecap: 'round',
        strokeOpacity: 1,
      }}
      transform="translate(-162.788 -27.11)"
    />
    <path
      d="M192.902 56.683c.182 6.869-6.476 12.442-14.465 12.442-7.99 0-14.478-5.57-14.466-12.442.02-11.385 12.02-26.816 14.243-26.816 2.597 0 14.387 15.424 14.688 26.816z"
      style={{
        fill: 'url(#gota_svg__b)',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 0.350338,
        strokeLinecap: 'round',
        strokeOpacity: 1,
      }}
      transform="translate(-162.788 -27.11)"
    />
    <path
      d="M176.716 28.9c-2.208.153-13.573 15.747-13.591 27.27-.01 6.057 4.651 11.12 10.87 12.361-5.736-1.717-9.882-6.634-9.873-12.432.017-10.202 8.669-23.49 12.594-27.2z"
      style={{
        fill: '#fff',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 0.34555,
        strokeLinecap: 'round',
        strokeOpacity: 1,
      }}
      transform="translate(-162.788 -27.11)"
    />
    <text
      xmlSpace="preserve"
      style={{
        fontWeight: 700,
        fontSize: '15.0621px',
        fontFamily: '&quot',
        InkscapeFontSpecification: '&quot',
        whiteSpace: 'pre',
        shapeInside: 'url(#gota_svg__c)',
        display: 'inline',
        fill: '#fff',
        fillOpacity: 1,
        stroke: '#000203',
        strokeWidth: 0.520061,
        strokeLinecap: 'round',
        strokeDasharray: 'none',
        strokeOpacity: 1,
      }}
      transform="matrix(.72491 0 0 .72491 -199.21 -271.087)"
    >
      <tspan x={281.736} y={418.335}>
        {humidity + '%'}
      </tspan>
    </text>
  </svg>
);
export default Humidity;
