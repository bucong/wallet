import store from '@/store/store'
//操作localStorage
export function handleLocalStorage(method, key, value) {
  switch (method) {
    case 'get' : {
      let temp = window.localStorage.getItem(key);
      if (temp) {
        return temp
      } else {
        return false
      }
    }
    case 'set' : {
      window.localStorage.setItem(key, value);
      break
    }
    case 'remove': {
      window.localStorage.removeItem(key);
      break
    }
    default : {
      return false
    }
  }
}
//判断登录状态
export function loginStatus() {
  //vuex
  if(store.state.mainPassword === ''){
    //未记住密码
    if(localStorage.mainPassword){
      //记住密码
      return localStorage.publicKey;
    }else{
      //未登录
      return false;
    }
  }else{
    //记住密码，返回公钥
    return store.state.publicKey;
  }
}
