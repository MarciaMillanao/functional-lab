exports.log = (...args) => args.join(' '); // null;

exports.logger =(namespace) => exports.log.bind(null, namespace);

//const info = logger('INFO:')
//log('adasfadgdsfg', 'fadsjgkjdf', 'adsgdfhgdgdf')//INFO : adasfadgdsfg, fadsjgkjdf,adsgdfhgdgdf
