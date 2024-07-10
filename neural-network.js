// neural-network.js
const width = document.getElementById('neural-network').clientWidth;
const height = 400;

const svg = d3.select('#neural-network')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2));

const graph = {
  nodes: [
    {id: 'Input', group: 1},
    {id: 'Hidden1', group: 2},
    {id: 'Hidden2', group: 2},
    {id: 'Output', group: 3},
  ],
  links: [
    {source: 'Input', target: 'Hidden1', value: 1},
    {source: 'Input', target: 'Hidden2', value: 1},
    {source: 'Hidden1', target: 'Output', value: 1},
    {source: 'Hidden2', target: 'Output', value: 1},
  ]
};

const link = svg.append('g')
  .selectAll('line')
  .data(graph.links)
  .enter().append('line')
  .attr('stroke-width', d => Math.sqrt(d.value))
  .attr('stroke', '#4CE5D8');

const node = svg.append('g')
  .selectAll('circle')
  .data(graph.nodes)
  .enter().append('circle')
  .attr('r', 5)
  .attr('fill', d => d.group === 1 ? '#4CE5D8' : d.group === 2 ? '#7CEFFF' : '#FFFFFF');

simulation
  .nodes(graph.nodes)
  .on('tick', ticked);

simulation.force('link')
  .links(graph.links);

function ticked() {
  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  node
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);
}