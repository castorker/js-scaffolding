import './index.css';
import numeral from 'numeral';

const bitcoinValue = numeral(14186.07).format('€0,0.00');
// debugger;
console.log(`1 Bitcoin equals ${bitcoinValue} Euro at ${new Date(Date.now()).toLocaleString()}`); // eslint-disable-line no-console
