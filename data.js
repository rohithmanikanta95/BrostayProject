const roomsData = [
    {
        name: "AKY's PG/Rooms",
        gender: "Men",
        location: "https://maps.app.goo.gl/1yfMrWyXQvnWno2G6?g_st=aw",
        contact: "91005 90706",
        price: "₹8,500 (transport, AC)",
        type: "PG/Rooms", 
        limit: "5, 6, 7, 8 sharing",
        advance: "₹10,000 per head"
    },
    {
        name: "Elumalai shenbagam",
        gender: "Men",
        location: "https://maps.app.goo.gl/sMEqxvje5J62MNBp9?g_st=aw",
        contact: "63745 73146",
        price: "₹10,500",
        type: "1BHK",
        limit: "4 sharing",
        advance: "₹30,000 per room"
    },
    {
        name: "Sai Ram Apartments",
        gender: "Men",
        location: "https://maps.app.goo.gl/UmsU12w2TnsuVUGF6",
        contact: "8667411120",
        price: "₹13,500",
        type: "1BHK",
        limit: "5 sharing",
        advance: "₹10,000"
    },
    {
        name: "VijayaShanthi",
        gender: "Men/Women",
        location: "https://maps.app.goo.gl/NhnKf9tRBmKBs2jS7?g_st=aw",
        contact: "Not specified",
        price: "1BHK: ₹12,000, 2BHK: ₹14,800, 3BHK: ₹16,000",
        type: "1BHK, 2BHK, 3BHK",
        limit: "2, 4, 6 sharing",
        advance: "₹50,000+"
    },
    {
        name: "KG",
        gender: "Men/Women",
        location: "https://share.google/hURbXCLqDJpTKbNQh",
        contact: "8608009401",
        price: "based on owner",
        type: "1BHK, 2BHK",
        limit: "Not specified",
        advance: "based on owner"
    },
    {
        name: "Arun Excello",
        gender: "Men/Women",
        location: "https://maps.app.goo.gl/C9Rs67KX1Ka53BSM6?g_st=aw",
        contact: "8608009401",
        price: "₹10,000",
        type: "2BHK",
        limit: "4 sharing",
        advance: "₹30,000"
    },
    {
        name: "Romaa Parradise",
        gender: "Men/Women",
        location: "https://maps.app.goo.gl/wy3RiDJR8X1eEnAZA?g_st=aw",
        contact: "Not specified",
        price: "Not specified",
        type: "Not specified",
        limit: "Not specified",
        advance: "Based on Owner"
    },
    {
        name: "Tata Value Homes",
        gender: "Men/Women",
        location: "https://maps.app.goo.gl/934NXDRdWpZhuw3n8?g_st=aw",
        contact: "Not specified",
        price: "Not specified",
        type: "Not specified",
        limit: "Not specified",
        advance: "Based on Owner"
    },
    {
        name: "Urbanrise City of Joy",
        gender: "Men/Women",
        location: "https://maps.app.goo.gl/6pzNfWzjxLmQKQAx6?g_st=aw",
        contact: "Not specified",
        price: "Not specified",
        type: "Not specified",
        limit: "Not specified",
        advance: "Based on Owner"
    }
];

const pgsData = [
    {
        name: "VASISHTHA MENS PG(1)",
        gender: "Men",
        location: "https://maps.app.goo.gl/AVh3qNeSMWCgzCKXA",
        contact: "7416573998",
        price: "₹8,000",
        type: "1BHK",
        limit: "6 sharing",
        advance: "₹12,000",
        food: "3 times everyday"
    },
    {
        name: "SIVA SAI MENS PG",
        gender: "Men",
        location: "https://maps.app.goo.gl/H2ysX8Ny3jYh92SR9",
        contact: "8123757562",
        price: "₹8,500  OR ₹8,000 (with and without transport)",
        type: "1BHK",
        limit: "4 sharing",
        advance: "₹8,500",
        food: "3 times everyday"
    },
    {
        name: "STANZA LIVING-EUGENE HOUSE PG",
        gender: "Co-Ed-PG",
        location: "Near EVP, behind Godrej apartments",
        contact: "9360517010",
        price: "₹10,500 for 3 sharing, ₹11,500 for 2 sharing",
        type: "1BHK",
        limit: "2 or 3 sharing",
        advance: "Not specified",
        food: "2 times on weekdays, 3 times on weekend"
    },
    {
        name: "ROYAL ARUNACHALA SIVA MENS PG(1)",
        gender: "Men",
        location: "https://maps.app.goo.gl/2vyAbeP4DAQuBusk8",
        contact: "9488684802",
        price: "₹8,000",
        type: "1BHK",
        limit: "6 sharing",
        advance: "₹10,000",
        food: "3 times everyday"
    },
    {
        name: "ROYAL ARUNACHALA SIVA MENS PG(2)",
        gender: "Men",
        location: "https://maps.app.goo.gl/2vyAbeP4DAQuBusk8",
        contact: "9488684802",
        price: "₹9,000",
        type: "1BHK",
        limit: "8, 6, 4, or 2 sharing",
        advance: "₹10,000",
        food: "3 times everyday"
    },
    {
        name: "VASISHTHA MENS PG(2)",
        gender: "Men",
        location: "https://maps.app.goo.gl/AVh3qNeSMWCgzCKXA",
        contact: "8123757562",
        price: "₹8,500",
        type: "1BHK",
        limit: "6 sharing",
        advance: "₹12,000",
        food: "3 times everyday"
    },
    {
        name: "AKY's PG/Rooms",
        gender: "Men",
        location: "Not specified",
        contact: "91005 90706",
        price: "₹8,500 (includes 2 times food, transport, AC)",
        type: "PG/Rooms",
        limit: "5, 6, 7, 8 sharing",
        advance: "₹10,000 per head",
        food: "2 times on weekdays, 3 times on weekend"
    },
    {
        name: "Sri krishna PG",
        gender: "Men",
        location: "https://maps.app.goo.gl/zWdHfht37qcxXjWW8?g_st=aw",
        contact: "98401 53898",
        price: "₹6,200 (with food) OR ₹4,000 (without food)",
        type: "1BHK",
        limit: "6 sharing",
        advance: "₹10,000",
        food: "2 times on weekdays, 3 times on weekend"
    }
];
