const getQiubai = require('../src/api/qiubai')
const getKuaidi = require('../src/api/kuaidi')
const getLaji = require('../src/api/laji')

// getKuaidi('zhongtong', '75157641717724');
// getLaji('西瓜'); 

// getLaji('鞋子'); 
console.time('xx');
getLaji('电池').then(data => {
  console.log(data);
  console.timeEnd('xx')
});


