/* global localStorage, Audio */
HTMLElement.prototype.click = function ( funct ) {
  this.addEventListener( 'click', funct )
}
var bruh = 0
if ( localStorage.getItem( 'bruh' ) ) bruh = JSON.parse( localStorage.getItem( 'bruh' ) )
document.getElementById( 'bruh' ).click( ( e ) => {
  console.log( e )
  var a = new Audio( 'bruh.mp3' )
  a.play()
  bruh++
  localStorage.setItem( 'bruh', bruh )
  document.getElementById( 'count' ).innerText = bruh
} )
// Load the bruh count
document.getElementById( 'count' ).innerText = bruh


let c = 0
const o = '38384040373937396665'.match( /.{1,2}/g )
var activate = () => { }
document.addEventListener( 'keydown', ( e ) => {
  c = ( e.keyCode === o[ c ] ) ? c + 1 : 0
  if ( c === o.length ) document.querySelector( 'iframe' ).remove()
} )