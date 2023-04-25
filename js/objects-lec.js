(function() {

    let emptyObject = {};
    // We can create an object with properties like so!
    var kamea = {
        let kamea = {
            name: "Kamea",
            location: "San Antonio",
            colors: ["Black", "White"],
            @@ -12,26 +13,26 @@
        };

        // We can also define property values to an object these two ways!
        kamea.age = 6;
        kamea.age = 9;
        kamea["weight_in_lbs"] = 2400;

        var babyBeluga = {
            let babyBeluga = {
                name: "Baby Beluga",
                location: "The Deep Blue Sea",
                colors: ["White"],
                species: "Beluga",
                age: 2,
                date_of_birth: new Date("2/6/2018")
                date_of_birth: new Date("2/6/2021")
            };

            // We can access the properties but using the following syntax.
            // We can access the properties by using the following syntax.
            console.log(kamea.age);

            console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

            // Well, whales are neat and all, but what would be a more practical application for objects?

            var forecast = [
                let forecast = [
                    {
                        day: "Monday",
                        summary: "Partly cloudy.",
                        @@ -92,23 +93,48 @@
                            console.log(prediction.day);
                    });

    let arrOfCheeses = [
        {
            name: "Cheddar",
            origin: "England",
            fruit: "n/a"
        }, {
            name: "Brie",
            origin: "France",
            fruit: "n/a"
        }, {
            name: "Wensleydale",
            origin: "England",
            fruit: "Cranberry"
        }
    ];

    arrOfCheeses.forEach(function(cheese) {
        console.log(cheese.fruit);
    })

    // While we store the different forecasts in an array to hold the information for the three different days, each object has different information in order to store the information for a daily weather forecast.

    // Let's take a look at another object...

    var user = {
        let user = {
            username: "JimLikesEggs",
            password: "this-is-am-good-password",
            avatar_img: 'path/to/file.jpg',
            d_o_b: new Date("2/17/1967")
        };

        // with this user object, let's add a method:
        let user2 = {
            username: "TimHatesEggs",
            password: "this-is-am-good-password",
            avatar_img: 'path/to/file.jpg',
            d_o_b: new Date("5/14/1999")
        };

        user.calcAge = function() {
            var today = new Date();
            function calcAge() {
                let today = new Date();
                if (this.d_o_b.getMonth() <= today.getMonth()){
                    if (this.d_o_b.getDate() <= today.getDate()) {
                        if (this.d_o_b.getMonth() < today.getMonth() || (this.d_o_b.getMonth() === today.getMonth() && this.d_o_b.getDate() <= today.getDate())) {
                            this.age = today.getFullYear() - this.d_o_b.getFullYear();
                        } else {
                            this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
                            this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
                        }
                        return this.age;
                    };
                }

                // with this user object, let's add a method:

                user.calcAge = calcAge;
                user2.calcAge = calcAge;

                console.log(user.calcAge());
                console.log(user2.calcAge());

                // Notice with the method we used the "this" keyword. This allows us to have an object to reference itself when creating a method. It will not work when trying to define a property.
                // Notice with the method we used the "this" keyword. This allows us to have an object reference itself when creating a method. It will not work when trying to define a property.

                // user.name = this.username; // This will give an error.
                user.name = this.username; // This will give an error.
                //
                // console.log(user.name);
                console.log(user.name);

            })();