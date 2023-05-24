JavaScript
-membuat website lebih interaktif
-
2. Variable
-var nama="zaw";    \
-let nama="zaw";     |template literal
-const nama="zaw";  /
console.log('halo nama saya ${nama}');		sebelum ada template literal ->console.log("halo nama saya" + nama);
perbedaan var dan let :var ruang lingkupnya window
variable const tidak bisa diganti
3. Tipe data
-undefine
	let nama;
	console.log(nama);
-string
	let nama="zaw";
	let nama='zaw';
	console.log('halo nama saya ${nama}');
-numbers->floating=koma2
		  int 
	let umur =23;
	let tinggi = 170.5;
	console.log('halo nama saya ${nama} dan umur saya ${umur}');
-boolean
	const jomblo = true
		console.log('halo nama saya ${nama} dan umur saya ${umur} dan status saya saat ini ${jomblo}');
-array
	let hobi =["main musik", "ngoding", 12, true, {nama: "zaw"}];
	console.log(hobi);
-object
	let person={
		nama: "zaw",
		umur: 23,
		email: "zawxzero@gmail.com",
		hobi: ["ngonding", "tidur", "game"],
		sayHello: function() {
			console.log("halo nama saya" + this.nama)
		}
	}