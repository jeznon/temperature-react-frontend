import * as React from 'react';
const Temperature = ({ temperature, ...props }) => {
  const calculateValue = () => {
    if (temperature <= 10) {
      return 10;
    } else if (temperature >= 40) {
      return 0;
    } else {
      return 10 - (temperature - 10) / 3;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 54.678 19.307"
      {...props}
    >
      <defs>
        <linearGradient id="term_svg__d">
          <stop
            offset={0}
            style={{
              stopColor: '#e743ce',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.418}
            style={{
              stopColor: '#e437b7',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#dc156f',
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient id="term_svg__c">
          <stop
            offset={0}
            style={{
              stopColor: '#f778cf',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="term_svg__b">
          <stop
            offset={0}
            style={{
              stopColor: '#f77bce',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#f77bce',
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="term_svg__a">
          <stop
            offset={0}
            style={{
              stopColor: '#f19ce6',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.167}
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.734}
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#fff',
              stopOpacity: 0.58422029,
            }}
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#term_svg__a"
          id="term_svg__h"
          x1={67.864}
          x2={69.105}
          y1={117.353}
          y2={116.001}
          gradientTransform="rotate(-15.001 98.295 94.032) scale(.92769)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#term_svg__b"
          id="term_svg__g"
          x1={70.333}
          x2={69.268}
          y1={118.656}
          y2={116.794}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#term_svg__c"
          id="term_svg__f"
          x1={69.805}
          x2={69.198}
          y1={111.172}
          y2={111.167}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#term_svg__d"
          id="term_svg__e"
          x1={63.507}
          x2={64.983}
          y1={106.331}
          y2={121.718}
          gradientTransform="matrix(.88272 0 0 .94636 8.4 5.456)"
          gradientUnits="userSpaceOnUse"
        />
        <path id="term_svg__i" d="M281.736 397.169h82.663v53.037h-82.663z" />
      </defs>
      <g transform="translate(-58.977 -101.836)">
        <rect
          width={54.288}
          height={18.916}
          x={59.172}
          y={102.031}
          ry={9.458}
          style={{
            fill: 'url(#term_svg__e)',
            fillOpacity: 1,
            stroke: '#000203',
            strokeWidth: 0.390077,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M69.503 104.094a.955.955 0 0 0-.957.957v10.116a2.509 2.509 0 0 0-1.551 2.317 2.509 2.509 0 0 0 2.508 2.51 2.509 2.509 0 0 0 2.509-2.51 2.509 2.509 0 0 0-1.552-2.319v-10.114a.954.954 0 0 0-.957-.957z"
          style={{
            fill: '#fff',
            fillOpacity: 1,
            stroke: '#000203',
            strokeWidth: 0.274,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width={1.227}
          height={12.345}
          x={68.898}
          y={105.084}
          ry={0.613}
          style={{
            fill: '#e743ce',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.312148,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width={0.579}
          height={10.535}
          x={69.22}
          y={105.54}
          ry={0.523}
          style={{
            fill: 'url(#term_svg__f)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.198171,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={69.525}
          cy={117.447}
          r={2.151}
          style={{
            fill: '#e743ce',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.336057,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={69.541}
          cy={117.225}
          rx={1.852}
          ry={1.892}
          style={{
            fill: 'url(#term_svg__g)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.300519,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width={0.054}
          height={9.822}
          x={69.122}
          y={105.577}
          rx={0.027}
          ry={0.049}
          style={{
            fill: '#fff',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.219807,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M68.443 115.944a1.515 1.515 0 0 0-.54 2.073 1.515 1.515 0 0 0 .098.147 1.775 1.775 0 0 1 .753-2.182 1.775 1.775 0 0 1 .674-.23 1.515 1.515 0 0 0-.985.192z"
          style={{
            fill: 'url(#term_svg__h)',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.236764,
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width={1.227}
          height={calculateValue()}
          x={68.898}
          y={105.084}
          ry={0}
          style={{
            fill: '#fff',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.194598,
            strokeLinecap: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M70.424 106.135h-.616M70.424 107.495h-.616M70.424 108.856h-.616M70.424 110.216h-.616M70.424 111.576h-.616M70.424 112.936h-.616M70.424 114.297h-.616"
          style={{
            fill: '#f77bce',
            fillOpacity: 1,
            stroke: '#000203',
            strokeWidth: 0.174,
            strokeLinecap: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <text
          xmlSpace="preserve"
          style={{
            fontWeight: 700,
            fontSize: '21.0621px',
            fontFamily: '&quot',
            InkscapeFontSpecification: '&quot',
            whiteSpace: 'pre',
            shapeInside: 'url(#term_svg__i)',
            fill: '#fff',
            fillOpacity: 1,
            stroke: '#000203',
            strokeWidth: 0.520061,
            strokeLinecap: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
          transform="matrix(.72491 0 0 .72491 -126.926 -185.92)"
        >
          <tspan x={281.736} y={418.335}>
            {temperature + '\xB0C'}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Temperature;
