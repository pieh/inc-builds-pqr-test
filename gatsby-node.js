// saturate "20" workers
const NUM_NODES_FALLBACK = 20 * 50
let NUM_NODES = process.env.NUM_NODES
  ? parseInt(process.env.NUM_NODES, 10) || NUM_NODES_FALLBACK
  : NUM_NODES_FALLBACK

let buildNumber = 1

exports.sourceNodes = ({ actions, createContentDigest }) => {
  for (let i = 1; i <= NUM_NODES; i++) {
    const nodeInput = {
      id: `test-${i}`,
      index: i,
      buildNumber,
    }

    actions.createNode({
      ...nodeInput,
      internal: {
        type: `Test`,
        contentDigest: createContentDigest(nodeInput),
      },
    })
  }
  buildNumber++
}
