let product = document.createElement("div");
document.querySelector("body").append(product);
product.setAttribute("class", "mainbox");

let mensData = [
    {
        image_url:
            "https://images.bewakoof.com/t320/killmonger-half-sleeve-t-shirt-509349-1655101044-1.jpg",
        brand: "Bewakoof",
        brand_description: "Men's Black Killmonger Graphic Printed T-shirt",
        price: "₹299",
        striked_off_price: "799",
        member_price: "₹279 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/killmonger-oversized-fit-t-shirt-509357-1655101091-1.jpg",
        brand: "Bewakoof",
        brand_description:
            "Men's Olive Killmonger Graphic Printed Oversized T-shirt",
        price: "₹499",
        striked_off_price: "₹1299",
        member_price: "₹279 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t540/men-s-black-kalyug-age-of-machines-graphic-printed-t-shirt-509633-1655211307-1.jpg",
        brand: "Bewakoof",
        brand_description:
            "Men's Black Kalyug Age of Machines Graphic Printed T-shirt",
        price: "₹299",
        striked_off_price: "₹999",
        member_price: "₹279 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/time-flies-oversized-fit-t-shirt-509134-1654873540-1.jpg",
        brand: "Bewakoof",
        brand_description:
            "Men's White Time Flies Graphic Printed Oversized T-shirt",
        price: "₹499",
        striked_off_price: "₹1299",
        member_price: "₹469 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/bugs-bunny-circle-half-sleeve-t-shirt-499256-1652767566-1.jpg",
        brand: "Bewakoof",
        brand_description: "Men's Blue Bugs Bunny Circle Graphic Printed T-shirt",
        price: "₹399",
        striked_off_price: "₹999",
        member_price: "₹379 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/black-full-sleeve-henley-t-shirt-405279-1642406816-1.jpg",
        brand: "Bewakoof",
        brand_description: "Black Full Sleeve Henley T-shirt",
        price: "₹499",
        striked_off_price: "₹949",
        member_price: "₹459 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/customizable-black-printed-round-neck-t-shirt-443960-1645623796-1.jpg",
        brand: "Bewakoof",
        brand_description: "Customizable Mens Black Round Neck T-shirt",
        price: "₹499",
        striked_off_price: "₹830",
        member_price: "₹449 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/need-space-teddy-half-sleeve-t-shirt-496045-1651841323-1.jpg",
        brand: "Bewakoof",
        brand_description:
            "Men's Black I Need Some Space Teddy Graphic Printed T-shirt",
        price: "₹449",
        striked_off_price: "₹999",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/the-traveller-full-sleeve-t-shirt-276528-1638212427-1.jpg",
        brand: "Bewakoof",
        brand_description: "The Traveller Full Sleeve T-Shirt",
        price: "₹399",
        striked_off_price: "₹1299",
        member_price: "₹379 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1653031889-1.jpg",
        brand: "Bewakoof",
        brand_description: "White Half Sleeve T-Shirt",
        price: "₹349",
        striked_off_price: "₹999",
        member_price: "₹329 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/marvel-s-moon-knight-half-sleeve-t-shirt-483814-1648618777-1.jpg",
        brand: "Bewakoof",
        brand_description: "Men's Blue Marvel Moon Knight Graphic Printed T-shirt",
        price: "₹449",
        striked_off_price: "₹999",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url:
            "https://images.bewakoof.com/t320/men-s-black-the-beatles-graphic-printed-slim-fit-t-shirt-494907-1651066941-1.jpg",
        brand: "Snitch",
        brand_description:
            "Men's Black The Beatles Graphic Printed Slim Fit T-shirt",
        price: "₹539",
        striked_off_price: "₹599",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-green-fish-graphic-printed-slim-fit-t-shirt-494927-1651066838-1.jpg",
        brand: "Snitch",
        brand_description: "Men's Green Fish Graphic Printed Slim Fit T-shirt",
        price: "₹539",
        striked_off_price: "₹599",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-olive-shuffle-graphic-printed-slim-fit-t-shirt-494923-1651067410-1.jpg",
        brand: "Snitch",
        brand_description: "Men's Olive Shuffle Graphic Printed Slim Fit T-shirt",
        price: "₹539",
        striked_off_price: "₹599",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-brown-slim-fit-cotton-t-shirt-494932-1651067132-1.jpg",
        brand: "Snitch",
        brand_description: "Men's Brown Slim Fit Cotton T-shirt",
        price: "₹764",
        striked_off_price: "₹739",
        member_price: "₹739 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-white-slim-fit-shirt-495941-1651673939-1.jpg",
        brand: "Snitch",
        brand_description: "Men's White Slim Fit Shirt",
        price: "₹799",
        striked_off_price: "₹999",
        member_price: "₹779 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-yellow-space-graphic-printed-slim-fit-t-shirt-494906-1651066922-1.jpg",
        brand: "Snitch",
        brand_description: "Men's Yellow Space Graphic Printed Slim Fit T-shirt",
        price: "₹539",
        striked_off_price: "₹599",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-kurta-d-greyblacksva-dupion-kurta-kurta-381221-1626783274.jpg",
        brand: "Hangup",
        brand_description: "Kurta",
        price: "₹690",
        striked_off_price: "₹3499",
        member_price: "₹659 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-kurtablack-dupion-shortkurta-kurta-387530-1628520578.jpg",
        brand: "Hangup",
        brand_description: "Kurta",
        price: "₹655",
        striked_off_price: "₹2499",
        member_price: "₹629 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-kurtak76-longkurta-kurta-387523-1628520506.jpg",
        brand: "Hangup",
        brand_description: "Kurta",
        price: "₹834",
        striked_off_price: "₹2999",
        member_price: "₹799 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-printed-kurta-setsk119kurtaset42-394938-1631598813-1.jpg",
        brand: "Hangup",
        brand_description: "Kurta",
        price: "₹999",
        striked_off_price: "₹3499",
        member_price: "₹949 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-solid-casual-shirtpurple-hang-up-men-s-shirt-in-pure-cotton-338074-1614335685.jpg",
        brand: "Hangup",
        brand_description: "Solid Casual Shirt",
        price: "₹679",
        striked_off_price: "₹999",
        member_price: "₹649 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/hangup-kurta-darkbluewhite-linen-kurta-kurta-381231-1626783856.jpg",
        brand: "Hangup",
        brand_description: "Kurta",
        price: "₹830",
        striked_off_price: "₹3999",
        member_price: "₹789 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-striped-cotton-polo-t-shirt-493339-1650913259-1.JPG",
        brand: "Campus Sutra",
        brand_description: "Mens Grey Striped Cotton Polo T-shirt",
        price: "₹734",
        striked_off_price: "₹1299",
        member_price: "₹699 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-maroon-blue-color-block-polo-t-shirt-493337-1650913088-1.JPG",
        brand: "Campus Sutra",
        brand_description: "Mens Maroon & Blue Color Block Polo T-shirt",
        price: "₹584",
        striked_off_price: "₹1049",
        member_price: "₹559 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/campus-sutra-men-s-blue-striped-t-shirt73-451561-1637611473-1.jpg",
        brand: "Campus Sutra",
        brand_description: "Mens Blue Striped Tegular Fit T-shirt",
        price: "₹734",
        striked_off_price: "₹1299",
        member_price: "₹699 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-striped-cotton-shirt-494878-1651067086-1.jpg",
        brand: "Campus Sutra",
        brand_description: "Mens BNlue Striped Cotton Shirt",
        price: "₹854",
        striked_off_price: "₹1499",
        member_price: "₹809 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-checked-cotton-shirt-494890-1651067540-1.jpg",
        brand: "Campus Sutra",
        brand_description: "Mens Blue Checked Cotton Shirt",
        price: "₹854",
        striked_off_price: "₹1499",
        member_price: "₹809 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-yellow-white-striped-cotton-shirt-494856-1651066898-1.jpg",
        brand: "Campus Sutra",
        brand_description: "Mens Yello & Whita Striped Cotton Shirt",
        price: "₹854",
        striked_off_price: "₹1499",
        member_price: "₹809 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/dillinger-yellow-colourblocked-t-shirt-t-shirt-424934-1640672244.jpg",
        brand: "Dillinger",
        brand_description: "Mens Yellow & White Colourblocked T-shirt",
        price: "₹499",
        striked_off_price: "₹1249",
        member_price: "₹469 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/dillinger-green-colourblocked-t-shirt-424875-1633548513-1.jpg",
        brand: "Dillinger",
        brand_description: "Mens Green Colourblocked T-shirt",
        price: "₹527",
        striked_off_price: "₹1199",
        member_price: "₹499 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/dillinger-yellow-typography-t-shirt-t-shirt-424517-1634126039.jpg",
        brand: "Dillinger",
        brand_description: "Mens Yellow Typography T-shirt",
        price: "₹499",
        striked_off_price: "₹1249",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/pink-plain-full-sleeves-t-shirt-368604-1638216120-1.jpg",
        brand: "Dillinger",
        brand_description: "Pink Plain Full Sleeves T-shirt",
        price: "₹587",
        striked_off_price: "₹1249",
        member_price: "₹549 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/dillinger-black-striped-t-shirt-424729-1633552176-1.jpg",
        brand: "Dillinger",
        brand_description: "Mens Black & Grey Striped T-shirt",
        price: "₹422",
        striked_off_price: "₹899",
        member_price: "₹399 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-purple-graphic-printed-oversized-t-shirt-507597-1654606519-1.jpg",
        brand: "Dillinger",
        brand_description: "Mens Purple Graphic Printed Oversized T-shirt",
        price: "₹532",
        striked_off_price: "₹1399",
        member_price: "₹509 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-white-color-block-slim-fit-t-shirt-485901-1649068759-1.jpg",
        brand: "Alcis",
        brand_description: "Men's Black & White Color Block Slim Fit T-shirt",
        price: "₹650",
        striked_off_price: "₹1199",
        member_price: "₹629 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-printed-slim-fit-t-shirt-485879-1649068364-1.jpg",
        brand: "Alcis",
        brand_description: "Mens Grey Pirnted Slim Fit T-shirt",
        price: "₹500",
        striked_off_price: "₹999",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-green-be-the-game-typography-slim-fit-t-shirt-485881-1649069025-1.jpg",
        brand: "Alcis",
        brand_description: "Mens Green BE the Game Typography Slim Fit T-shirt",
        price: "₹500",
        striked_off_price: "₹999",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-think-big-typography-slim-fit-t-shirt-500628-1653036948-1.jpg",
        brand: "Alcis",
        brand_description: "Mens Grey Think Big Typography Slim Fit T-shirt",
        price: "₹899",
        striked_off_price: "",
        member_price: "₹869 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-pink-warm-up-typography-slim-fit-t-shirt-485592-1649059994-1.jpg",
        brand: "Alcis",
        brand_description: "Men's Pink Warm Up Typography Slim Fit T-shirt",
        price: "₹500",
        striked_off_price: "₹999",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-red-athletics-typography-slim-fit-t-shirt-485882-1649068741-1.jpg",
        brand: "Alcis",
        brand_description: "Men's Red Athletics Typography Slim Fit T-shirt",
        price: "₹600",
        striked_off_price: "₹1199",
        member_price: "₹509 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-maroon-all-over-printed-t-shirt-502060-1654867697-1.JPG",
        brand: "Breakbounce",
        brand_description: "Men's Maroon All Over Printed T-shirt",
        price: "₹450",
        striked_off_price: "₹899",
        member_price: "₹429 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/breakbounce-men-slim-fit-polo-t-shirt-445639-1636453935-1.jpg",
        brand: "Breakbounce",
        brand_description: "Mens Orange Slim Fit Polo T-shirt",
        price: "₹600",
        striked_off_price: "₹1499",
        member_price: "₹569 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/breakbounce-men-round-neck-t-shirt-t-shirt-392550-1641895842.jpg",
        brand: "Breakbounce",
        brand_description: "Mens Pink Graphic Print Round Nexk T-shirt",
        price: "₹549",
        striked_off_price: "₹999",
        member_price: "₹509 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/breakbounce-men-regular-fit-printed-t-shirt-445554-1636453632-1.jpg",
        brand: "Breakbounce",
        brand_description: "Mens Grey Regular Fit Printed T-shirt",
        price: "₹450",
        striked_off_price: "₹899",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/breakbounce-men-s-coral-red-polo-t-shirt-457795-1639761592-1.jpg",
        brand: "Breakbounce",
        brand_description: "Mens Coral Red Polo T-shirt",
        price: "₹989",
        striked_off_price: "₹1799",
        member_price: "₹929 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/breakbounce-men-s-royal-blue-polo-t-shirt-457798-1639762340-1.jpg",
        brand: "Breakbounce",
        brand_description: "Mens Royal Blue Polo T-shirt",
        price: "₹989",
        striked_off_price: "₹1799",
        member_price: "₹929 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-printed-men-round-neck-royal-blue-t-shirt-404461-1631707314-1.jpg",
        brand: "Alstyle",
        brand_description: "Printed Men Round Neck Royal Blue T Shirt",
        price: "₹440",
        striked_off_price: "₹1099",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-printed-men-round-neck-navy-t-shirt-404465-1631707134-1.jpg",
        brand: "Alstyle",
        brand_description: "Printed Men Round Neck Navy T Shirt",
        price: "₹440",
        striked_off_price: "₹1099",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-printed-men-round-neck-maroon-t-shirt-404459-1631707098-1.jpg",
        brand: "Alstyle",
        brand_description: "Printed Men Round Neck Maroon T-Shirt",
        price: "₹440",
        striked_off_price: "₹1099",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-printed-men-round-neck-mustard-t-shirt-404464-1631707063-1.jpg",
        brand: "Alstyle",
        brand_description: "Printed Men Round Neck Mustard T-Shirt",
        price: "₹440",
        striked_off_price: "₹1099",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-self-design-men-round-neck-d-grey-t-shirt-393260-1630575775-1.jpg",
        brand: "Alstyle",
        brand_description: "Mens Self Design Tound Neck D.Grey T-Shirt",
        price: "₹399",
        striked_off_price: "₹999",
        member_price: "₹379 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/alstyle-printed-men-round-neck-maroon-t-shirt-411190-1632513929-1.jpg",
        brand: "Alstyle",
        brand_description: "Printed Men Round Neck Maroon T-Shirt",
        price: "₹440",
        striked_off_price: "₹1099",
        member_price: "₹419 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-jeans-497256-1652105273-1.jpg",
        brand: "High Star",
        brand_description: "Mens Black Jeans",
        price: "₹833",
        striked_off_price: "₹1699",
        member_price: "₹789 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-slim-fit-jeans-497289-1652104798-1.jpg",
        brand: "High Star",
        brand_description: "Mens Blue SLim Fit Jeans",
        price: "₹833",
        striked_off_price: "₹2499",
        member_price: "₹929 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-slim-fit-jeans-497296-1652104816-1.jpg",
        brand: "High Star",
        brand_description: "Mens Blue SLim Fit Jeans",
        price: "₹1143",
        striked_off_price: "₹2199",
        member_price: "₹1089 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-slim-fit-jeans-497296-1652104816-1.jpg",
        brand: "High Star",
        brand_description: "Mens Blue Slim Fit Jeans",
        price: "₹1134",
        striked_off_price: "₹2699",
        member_price: "₹1079 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/high-star-mens-black-washed-slim-fit-mid-rise-jeans-with-belt-loopsmbdrhs1074-jeans-382682-1626875733.jpg",
        brand: "High Star",
        brand_description: "Mens Black Washed Slim Fit Mid Rise Jeans Belt Loopsmbdrhs1074",
        price: "₹828",
        striked_off_price: "₹2299",
        member_price: "₹789 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/high-star-mens-blue-washed-slim-fit-mid-rise-jeans-with-belt-loopsmbdrhs1035-jeans-382679-1626875681.jpg",
        brand: "High Star",
        brand_description: "Men's Blue Washed Slim Fit Mid Rise Jeans With Belt",
        price: "₹850",
        striked_off_price: "₹2299",
        member_price: "₹779 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-f-typography-oversized-t-shirt-493400-1650912951-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Mens Blue Typography Oversized T-shirt",
        price: "₹699",
        striked_off_price: "₹1199",
        member_price: "₹659 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-all-over-printed-slim-fit-shirt-493418-1650912797-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Mens Blue All Over Printed Slim Fit Shirt",
        price: "₹699",
        striked_off_price: "₹1599",
        member_price: "₹659 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-red-slim-fit-t-shirt-493424-1650912780-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Mens Red Slim Fit T-Shirt",
        price: "₹599",
        striked_off_price: "₹1199",
        member_price: "₹569 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-black-all-over-coconut-tree-printed-slim-fit-shirt-493426-1650912909-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Mens Grey & Black All Over Coconut Tree Printed Slim Fit T-Shirt",
        price: "₹699",
        striked_off_price: "₹1599",
        member_price: "₹659 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-purple-white-see-good-in-all-things-typography-oversized-t-shirt-shorts-set-493434-1650967986-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Men's Purple & White See Good in All Things Typography Oversized T-shirt & Shorts Set",
        price: "₹1399",
        striked_off_price: "₹1999",
        member_price: "1339 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-self-design-slim-fit-t-shirt-497661-1652185759-1.jpg",
        brand: "FUGAZEE",
        brand_description: "Mens Blue Self Design Slim Fit T-shirt",
        price: "₹699",
        striked_off_price: "₹1199",
        member_price: "₹699 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-95-typography-joggers-462605-1651745461-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's Black 95 Typography Joggers",
        price: "₹499",
        striked_off_price: "₹1499",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-95-typography-joggers-462606-1651745607-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's Black 95 Typography Joggers",
        price: "₹499",
        striked_off_price: "₹499",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-slim-fit-trackpant-436183-1652861433-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's Grey Slim Fit Trackpant",
        price: "₹549",
        striked_off_price: "₹1499",
        member_price: "₹509 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-all-over-printed-boxers-pack-of-3-479828-1647254875-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's All Over Printed Cotton Boxers (Pack of 3)",
        price: "₹569",
        striked_off_price: "₹1197",
        member_price: "₹549 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/blue-tyga-men-s-cotton-casual-shorts-with-zipper-pocket-436227-1634566474-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's Grey Cotton Casual Short with Zipper Pocket",
        price: "₹399",
        striked_off_price: "₹1399",
        member_price: "₹379 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-grey-3-4th-cotton-blend-shorts-462600-1651745552-1.jpg",
        brand: "Blue Tyga",
        brand_description: "Men's Grey 3/4th Cotton Blend Shorts",
        price: "₹419",
        striked_off_price: "₹1399",
        member_price: "₹399 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-brown-solid-t-shirt14-403605-1631622091-1.jpg",
        brand: "Quarantine",
        brand_description: "Brown Solid T-shirt",
        price: "₹378",
        striked_off_price: "₹899",
        member_price: "₹359 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-pink-solid-t-shirt-403579-1631621214-1.jpg",
        brand: "Quarantine",
        brand_description: "Pink Solid T-shirt",
        price: "₹357",
        striked_off_price: "₹699",
        member_price: "₹339 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-red-solid-t-shirt-403571-1631623348-1.jpg",
        brand: "Quarantine",
        brand_description: "Red Solid T-shirt",
        price: "₹249",
        striked_off_price: "₹699",
        member_price: "₹249 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-green-solid-t-shirt12-403603-1631621785-1.jpg",
        brand: "Quarantine",
        brand_description: "Green Solid T-shirt",
        price: "₹249",
        striked_off_price: "₹899",
        member_price: "₹299 for TreBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-grey-solid-t-shirt19-403610-1631621450-1.jpg",
        brand: "Quarantine",
        brand_description: "Grey Solid T-shirt",
        price: "378",
        striked_off_price: "₹899",
        member_price: "₹359 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/quarantine-grey-solid-t-shirt-403572-1631623137-1.jpg",
        brand: "Quarantine",
        brand_description: "Grey Solid T-shirt",
        price: "₹357",
        striked_off_price: "₹699",
        member_price: "₹339 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-green-floral-print-cotton-shirt-shorts-set-499079-1652773485-1.jpg",
        brand: "Joven",
        brand_description: "Men's Black & Green Floral Printed Cotton Shirt & Shorts Set",
        price: "₹999",
        striked_off_price: "₹2499",
        member_price: "₹959 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-embroidered-slim-fit-joggers-498814-1652452549-1.jpg",
        brand: "Joven",
        brand_description: "Men's Blue Embroidered Slim Fit Joggers",
        price: "₹649",
        striked_off_price: "₹1599",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-grey-checked-cotton-pyjamas-498734-1652452645-1.jpg",
        brand: "Joven",
        brand_description: "Men's Black & Grey Checked Cotton Pyjamas",
        price: "₹649",
        striked_off_price: "₹1599",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-maroon-embroidered-slim-fit-joggers-498810-1652452450-1.jpg",
        brand: "Joven",
        brand_description: "Mens Maroon Embroidered Slim Fit Joggers",
        price: "₹649",
        striked_off_price: "₹1599",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-black-grey-all-over-printed-cotton-boxers-pack-of-2-496925-1652272819-1.jpg",
        brand: "Joven",
        brand_description: "Menss Black & Grey All Over Printed Cotton Boxers (Pack of 2)",
        price: "₹499",
        striked_off_price: "₹1599",
        member_price: "₹479 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/men-s-blue-striped-cotton-pyjamas-498740-1652452693-1.jpg",
        brand: "Joven",
        brand_description: "Mens Blue Striped Cotton Pyjamas",
        price: "₹649",
        striked_off_price: "₹1599",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-psy-mandala-backprint-premium-cotton-t-shirt-440291-1639137998-1.jpg",
        brand: "WTFUNK",
        brand_description: "Men's PSY Mandala Backprint Premium Cotton T-shirt",
        price: "₹599",
        striked_off_price: "₹99",
        member_price: "₹559 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-workout-doodle-premium-cotton-t-shirt-t-shirt-440259-1640270051.jpg",
        brand: "WTFUNK",
        brand_description: "Men's Workout Doodle Premium Cotton T-shirt",
        price: "₹649",
        striked_off_price: "₹999",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-kolkata-travel-doodle-premium-cotton-t-shirt-440247-1639137905-1.jpg",
        brand: "WTFUNK",
        brand_description: "Men's Kolkata Travel Doodle Premium Cotton T-shirt",
        price: "₹649",
        striked_off_price: "₹999",
        member_price: "₹619 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-highway-to-hell-premium-cotton-t-shirt-t-shirt-440270-1640270095.jpg",
        brand: "WTFUNK",
        brand_description: "Men's Highway to Hell Premium Cotton T-shirt",
        price: "₹549",
        striked_off_price: "₹999",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-bangalore-travel-doodle-premium-cotton-t-shirt-440254-1639137991-1.jpg",
        brand: "WTFUNK",
        brand_description: "Men's Bangalore Travel Doodle Premium Cotton T-shirt",
        price: "₹649",
        striked_off_price: "₹999",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/wtfunk-pizza-love-premium-cotton-t-shirt-440284-1639137956-1.jpg",
        brand: "WTFUNK",
        brand_description: "Men's Pizza Love Premium Cotton T-shirt",
        price: "₹549",
        striked_off_price: "₹999",
        member_price: "₹519 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-black-stout-beer-print-round-neck-cotton-t-shirt-457591-1639759181-1.jpg",
        brand: "Nammur",
        brand_description: "Men's Black Stout Beer Print Cotton T-shirt",
        price: "₹599",
        striked_off_price: "",
        member_price: "₹579 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-grey-dotted-grey-logo-print-round-neck-cotton-t-shirt-457601-1639759098-1.jpg",
        brand: "Nammur",
        brand_description: "Men's Grey Dotted Grey Typography Cotton T-shirt",
        price: "₹599",
        striked_off_price: "",
        member_price: "₹579 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-white-bengaluru-illustration-aw-print-round-neck-cotton-t-shirt-457588-1639758888-1.jpg",
        brand: "Nammur",
        brand_description: "Men's White Bengaluru Illustration AW Print Cotton T-shirt",
        price: "₹699",
        striked_off_price: "",
        member_price: "₹679 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-blue-bengaluru-illustration-logo-print-round-neck-cotton-t-shirt-457594-1639759322-1.jpg",
        brand: "Nammur",
        brand_description: "Men's Blue Bengaluru Illustration Typography Cotton T-shirt",
        price: "₹549",
        striked_off_price: "",
        member_price: "₹529 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-black-bengaluru-illustration-logo-print-round-neck-cotton-t-shirt-457595-1639759284-1.jpg",
        brand: "Nammur",
        brand_description: "Men's Black Bengaluru Illustration Typography Cotton T-shirt",
        price: "₹549",
        striked_off_price: "",
        member_price: "₹529 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/nammur-men-s-black-bengaluru-illustration-aw-print-round-neck-cotton-t-shirt-457593-1639759023-1.jpg",
        brand: "Nammur",
        brand_description: "Men's Black Bengaluru Illustration AW Print Cotton T-shirt",
        price: "₹549",
        striked_off_price: "",
        member_price: "₹529 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/feel-good-lilac-colorblock-hoodie-t-shirt-453334-1640866574-1.jpg",
        brand: "Bewakoof",
        brand_description: "Hoodie",
        price: "₹499",
        striked_off_price: "₹999",
        member_price: "₹459 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/biker-bro-454464-1641818672-1.jpg",
        brand: "Bewakoof",
        brand_description: "Hoodie",
        price: "₹379",
        striked_off_price: "₹1199",
        member_price: "₹359 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/storm-green-half-sleeve-hoodie-t-shirt-436121-1635597459-1.jpg",
        brand: "Bewakoof",
        brand_description: "Hoodie",
        price: "₹399",
        striked_off_price: "₹1149",
        member_price: "₹379 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/blue-qurtz-illuminating-cut-n-sew-hoodie-sweatshirt-392783-1638435450-1.jpg",
        brand: "Bewakoof",
        brand_description: "Hoodie",
        price: "₹999",
        striked_off_price: "₹2349",
        member_price: "₹929 for TriBe Members",
    },
    {
        image_url: "https://images.bewakoof.com/t320/toffee-full-sleeve-basic-hoodies-406494-1632980094-1.jpg",
        brand: "Bewakoof",
        brand_description: "Hoodie",
        price: "₹549",
        striked_off_price: "₹1499",
        member_price: "₹509 for TriBe Members",
    },

];

mensData.forEach((e) => {
    let pbox = document.createElement("div");
    pbox.setAttribute("class", "productbox");
    product.append(pbox);
    let image = document.createElement("img");
    image.setAttribute("src", e.image_url);
    pbox.append(image);
    let brand = document.createElement("p");
    brand.textContent = e.brand;
    let brand_description = document.createElement("p");
    brand_description.textContent = e.brand_description;
    let price = document.createElement("p");
    price.textContent = e.price;
    let striked_off_price = document.createElement("p");
    striked_off_price.textContent = e.striked_off_price;
    let member_price = document.createElement("p");
    member_price.textContent = e.member_price;
    pbox.append(
        image,
        brand,
        brand_description,
        price,
        striked_off_price,
        member_price
    );
});
