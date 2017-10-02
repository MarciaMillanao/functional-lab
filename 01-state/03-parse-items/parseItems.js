const parseItems = (items) =>
	items.map(element => parseInt(element)).sort();

module.exports = parseItems;
