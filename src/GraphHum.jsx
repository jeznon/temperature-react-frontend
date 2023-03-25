import * as React from 'react';
const GraphHum = ({ arrayData, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 57.283 21.185"
    {...props}
  >
    <defs>
      <linearGradient id="graphhum_svg__a">
        <stop
          offset={0}
          style={{
            stopColor: '#08eb0d',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: '#3d1d7a',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#graphhum_svg__a"
        id="graphhum_svg__c"
        x1={79.723}
        x2={79.649}
        y1={72.604}
        y2={60.427}
        gradientTransform="matrix(.42346 0 0 1.08937 44.9 -11.27)"
        gradientUnits="userSpaceOnUse"
      />
      <clipPath id="graphhum_svg__b" clipPathUnits="userSpaceOnUse">
        <rect
          width={54.169}
          height={17.807}
          x={74.524}
          y={50.611}
          ry={3.763}
          style={{
            fill: '#cb3030',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1.18776,
            strokeLinecap: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
      </clipPath>
    </defs>
    <g transform="translate(-81.272 -22.915)">
      <rect
        width={56.006}
        height={19.908}
        x={81.911}
        y={23.554}
        ry={4.207}
        style={{
          fill: '#56a2cb',
          fillOpacity: 1,
          stroke: '#8b36af',
          strokeWidth: 1.277,
          strokeLinecap: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <g clipPath="url(#graphhum_svg__b)" transform="translate(8.309 -25.965)">
        {arrayData.map((item, index) => (
          <>
            <rect
              width={0.865}
              height={16.281}
              x={index * 5 + 78}
              y={53.146 + (item.hum * 18) / 100}
              ry={0.713}
              style={{
                fill: 'url(#graphhum_svg__c)',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.205189,
                strokeLinecap: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
              }}
            />
            <circle
              cx={index * 5 + 78.5}
              cy={53.146 + (item.hum * 18) / 100}
              r={0.589}
              style={{
                fill: '#d828bf',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.376999,
                strokeLinecap: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
              }}
            />
          </>
        ))}
        {arrayData.map((item, index) => {
          const val = arrayData.reduce((acc, item, index) => {
            acc = acc + 'L' + Math.round(index * 5 + 78.48) + ' ' + Math.round(53.146 + (item.hum * 18) / 100) + ' ';
            return acc;
          }, 'M73 66 ');

          return (
            <path
              d={val}
              style={{
                fill: 'none',
                fillOpacity: 1,
                stroke: '#f2f2f2',
                strokeWidth: 0.176999,
                strokeLinecap: 'round',
                strokeDasharray: 'none',
                strokeOpacity: 1,
              }}
            />
          );
        })}
      </g>
    </g>
  </svg>
);
export default GraphHum;
