app = Vue.createApp({
	data() {
		return {
			selectedCategory: "Category",
			selectedSortType: "Sort by:",
			viewItems: [],
			items: [
				{id: 1, img: "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU=", model: "Model 3", category: "Tesla", price: 48490, date: "2020-09-04"},
				{id: 2, img: "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM=", model: "Model X", category: "Tesla", price: 89990, date: "2017-08-08"},
				{id: 3, img: "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg=", model: "Model S", category: "Tesla", price: 82990, date: "2019-04-01"},
				{id: 4, img: "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8=", model: "Model Y", category: "Tesla", price: 48190, date: "2020-02-02"},
				{id: 5, img: "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME=", model: "Cayenne", category: "Porsche", price: 67500, date: "2017-12-20"},
				{id: 6, img: "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo=", model: "Macan", category: "Porshce", price: 52100, date: "2019-07-12"},
				{id: 7, img: "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI=", model: "Camry", category: "Toyota", price: 24425, date: "2015-06-29"},
				{id: 8, img: "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8=", model: "Accord", category: "Honda", price: 24800, date: "2018-10-02"},
				{id: 9, img: "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4=", model: "Civic", category: "Honda", price: 20650, date: "2015-04-04"},
				{id: 10, img: "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg=", model: "CX-5", category: "Mazda", price: 26940, date: "2012-11-03"},
				{id: 11, img: "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M=", model: "GLE", category: "Mercedes-Benz", price: 76500, date: "2020-02-05"},
				{id: 12, img: "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M=", model: "CLA", category: "Mercedes-Benz", price: 37850, date: "2019-06-09"},
				{id: 13, img: "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU=", model: "GLA 250", category: "Mercedes-Benz", price: 37280, date: "2017-05-02"},
				{id: 14, img: "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw=", model: "RX 350", category: "Lexus", price: 45175, date: "2015-01-01"},
				{id: 15, img: "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8=", model: "NX 300", category: "Lexus", price: 37510, date: "2018-09-12"},
				{id: 16, img: "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA=", model: "Urus", category: "Lamborghini", price: 218000, date: "2021-08-16"},
				{id: 17, img: "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU=", model: "Aventador", category: "Lamborghini", price: 393695, date: "2020-09-11"},
				{id: 18, img: "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8=", model: "A3", category: "Audi", price: 33500, date: "2019-05-08"},
				{id: 19, img: "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y=", model: "X3", category: "BMW", price: 43000, date: "2018-03-11"},
				{id: 20, img: "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4=", model: "2 Series", category: "BMW", price: 37500, date: "2019-01-15"}
			],
		}
	},

	computed: {
		getViewItems() {
			this.viewItems = [];
			if (this.selectedCategory === "Category") {
				this.viewItems = this.items;
			} else {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].category === this.selectedCategory) {
						this.viewItems.push(this.items[i]);
					}
				}
			}

			return this.getSortItems;
		},

		getSortItems() {
			this.getCategoryItems;
			switch(this.selectedSortType) {
				case "Low to High":
                    return this.viewItems.sort((a, b) => a.price - b.price);
                case "High to Low":
                    return this.viewItems.sort((a, b) => b.price - a.price);
                case "Newest Arrivals":
                    return this.viewItems.sort(function(a, b) {
						return (a.date < b.date ? 1 : -1);
					});
                default:
                    return this.viewItems;
			}
		}
	}
})

app.component('item-card', {
	template: `
	<div class="card m-2" style="width: 18rem;">
		<div class="card-body">
			<img v-bind:src="img" class="card-img-top" alt="...">
			<h5 class="card-title pt-2">{{ model }}</h5>
			<p class="card-text">Category: {{ category }}</p>
			<p class="card-text">Price: $\{{ price }}</p>
            <p class="card-text">Date: {{ date }}</p>
		</div>
	</div>`,
	props: ['img', 'model', 'category', 'price', 'date']
})

app.mount('#app')