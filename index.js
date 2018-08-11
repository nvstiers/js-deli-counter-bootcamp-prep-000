function takeANumber(array, name){
  array.unshift(name)

  return `Welcome, $(name). You are number $(array.length +1).`
}
