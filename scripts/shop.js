$(document).ready(function() {
    var cart = [[],[],[],[]];
    var total = 0;
    var cartToggle = false;
    
    var product_list = {
        weekly_deal: {
            name: "Mason Jar Canister Set (4) in Blue",
            code: "item0",
            price: 95
        },
        item1: {
            name: '24" Tiers - Rustic Retreat',
            code: "item1",
            price: 7
        },
        item2: {
            name: 'Bath Towel - Punched Star Border',
            code: "item2",
            price: 21
        },
        item3: {
            name: 'Bath Towel - Red Sturbridge Star',
            code: "item3",
            price: 21
        },
        item4: {
            name: 'Christmas Sampler - Burlap Hand Towel',
            code: "item4",
            price:3.5
        },
        item5: {
            name: 'Christmas Sampler - Placemat',
            code: "item5",
            price:4.2
        },
        item6: {
            name: 'Christmas Sampler - Table Runner 36"',
            code: "item6",
            price:10.5
        },
        item7: {
            name: 'Lathe Framed Print - All of Me Loves All Of You',
            code: "item7",
            price:21.95
        },
        item8: {
            name: 'Fingertip Towel - Punched Star',
            code: "item8",
            price:6.3
        },
        item9: {
            name: 'Hand Towel - Dig It',
            code: "item9",
            price:8.95
        },
        item10: {
            name: 'Lathe Framed - Shiplap',
            code: "item10",
            price:21.95
        }
    };
    
    function cart_add(item, quantity) {
        if (cart[0].indexOf(item.code) > -1) {
            cart[2][cart[0].indexOf(item.code)]+=quantity;
        } else {
            cart[0].push(item.code);
            cart[1].push(item.price);
            cart[2].push(quantity);
            cart[3].push(item.name);
        }
    }
    
    $('.weekly-plus').click(function() {
        document.getElementById('weekly-quantity').innerHTML = (parseInt(document.getElementById('weekly-quantity').innerHTML)) + 1;
    });
    
    $('.weekly-minus').click(function() {
        if (parseInt(document.getElementById('weekly-quantity').innerHTML) > 0) {
            document.getElementById('weekly-quantity').innerHTML = (parseInt(document.getElementById('weekly-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item1-plus').click(function() {
        document.getElementById('item1-quantity').innerHTML = (parseInt(document.getElementById('item1-quantity').innerHTML)) + 1;
    });
    
    $('.item1-minus').click(function() {
        if (parseInt(document.getElementById('item1-quantity').innerHTML) > 0) {
            document.getElementById('item1-quantity').innerHTML = (parseInt(document.getElementById('item1-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item2-plus').click(function() {
        document.getElementById('item2-quantity').innerHTML = (parseInt(document.getElementById('item2-quantity').innerHTML)) + 1;
    });
    
    $('.item2-minus').click(function() {
        if (parseInt(document.getElementById('item2-quantity').innerHTML) > 0) {
            document.getElementById('item2-quantity').innerHTML = (parseInt(document.getElementById('item2-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item3-plus').click(function() {
        document.getElementById('item3-quantity').innerHTML = (parseInt(document.getElementById('item3-quantity').innerHTML)) + 1;
    });
    
    $('.item3-minus').click(function() {
        if (parseInt(document.getElementById('item3-quantity').innerHTML) > 0) {
            document.getElementById('item3-quantity').innerHTML = (parseInt(document.getElementById('item3-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item4-plus').click(function() {
        document.getElementById('item4-quantity').innerHTML = (parseInt(document.getElementById('item4-quantity').innerHTML)) + 1;
    });
    
    $('.item4-minus').click(function() {
        if (parseInt(document.getElementById('item4-quantity').innerHTML) > 0) {
            document.getElementById('item4-quantity').innerHTML = (parseInt(document.getElementById('item4-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item5-plus').click(function() {
        document.getElementById('item5-quantity').innerHTML = (parseInt(document.getElementById('item5-quantity').innerHTML)) + 1;
    });
    
    $('.item5-minus').click(function() {
        if (parseInt(document.getElementById('item5-quantity').innerHTML) > 0) {
            document.getElementById('item5-quantity').innerHTML = (parseInt(document.getElementById('item5-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item6-plus').click(function() {
        document.getElementById('item6-quantity').innerHTML = (parseInt(document.getElementById('item6-quantity').innerHTML)) + 1;
    });
    
    $('.item6-minus').click(function() {
        if (parseInt(document.getElementById('item6-quantity').innerHTML) > 0) {
            document.getElementById('item6-quantity').innerHTML = (parseInt(document.getElementById('item6-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item7-plus').click(function() {
        document.getElementById('item7-quantity').innerHTML = (parseInt(document.getElementById('item7-quantity').innerHTML)) + 1;
    });
    
    $('.item7-minus').click(function() {
        if (parseInt(document.getElementById('item7-quantity').innerHTML) > 0) {
            document.getElementById('item7-quantity').innerHTML = (parseInt(document.getElementById('item7-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item8-plus').click(function() {
        document.getElementById('item8-quantity').innerHTML = (parseInt(document.getElementById('item8-quantity').innerHTML)) + 1;
    });
    
    $('.item8-minus').click(function() {
        if (parseInt(document.getElementById('item8-quantity').innerHTML) > 0) {
            document.getElementById('item8-quantity').innerHTML = (parseInt(document.getElementById('item8-quantity').innerHTML)) - 1;
        }
    });
    
    $('.item9-plus').click(function() {
        document.getElementById('item9-quantity').innerHTML = (parseInt(document.getElementById('item9-quantity').innerHTML)) + 1;
    });
    
    $('.item9-minus').click(function() {
        if (parseInt(document.getElementById('item9-quantity').innerHTML) > 0) {
            document.getElementById('item9-quantity').innerHTML = (parseInt(document.getElementById('item9-quantity').innerHTML)) - 1;
        }
    });
    $('.item10-plus').click(function() {
        document.getElementById('item10-quantity').innerHTML = (parseInt(document.getElementById('item10-quantity').innerHTML)) + 1;
    });
    
    $('.item10-minus').click(function() {
        if (parseInt(document.getElementById('item10-quantity').innerHTML) > 0) {
            document.getElementById('item10-quantity').innerHTML = (parseInt(document.getElementById('item10-quantity').innerHTML)) - 1;
        }
    });
    
    $('.weekly-add').click(function() {
        var quantity = parseInt(document.getElementById('weekly-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.weekly_deal, quantity);
        }
        $('#weekly-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item1-add').click(function() {
        var quantity = parseInt(document.getElementById('item1-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item1, quantity);
        }
        $('#item1-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item2-add').click(function() {
        var quantity = parseInt(document.getElementById('item2-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item2, quantity);
        }
        $('#item2-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item3-add').click(function() {
        var quantity = parseInt(document.getElementById('item3-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item3, quantity);
        }
        $('#item3-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item4-add').click(function() {
        var quantity = parseInt(document.getElementById('item4-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item4, quantity);
        }
        $('#item4-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item5-add').click(function() {
        var quantity = parseInt(document.getElementById('item5-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item5, quantity);
        }
        $('#item5-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item6-add').click(function() {
        var quantity = parseInt(document.getElementById('item6-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item6, quantity);
        }
        $('#item6-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item7-add').click(function() {
        var quantity = parseInt(document.getElementById('item7-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item7, quantity);
        }
        $('#item7-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item8-add').click(function() {
        var quantity = parseInt(document.getElementById('item8-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item8, quantity);
        }
        $('#item8-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item9-add').click(function() {
        var quantity = parseInt(document.getElementById('item9-quantity items').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item9, quantity);
        }
        $('#item9-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    $('.item10-add').click(function() {
        var quantity = parseInt(document.getElementById('item10-quantity').innerHTML);
        if (quantity > 0) {
            cart_add(product_list.item10, quantity);
        }
        $('#item10-quantity').html('0');
        $('.item-count').html('(' + (cart[0].length) + ' items)');
    });
    
    function showCart() {
            var delCount = 0;
            $('#show-cart').removeClass('cart-contents-hidden');
            $('#show-cart').addClass('cart-contents');
            $('#cart-background').addClass('overlay');
            $('#cart-exit').addClass('exit-shown');
            $('#cart-exit').removeClass('exit-hidden');
            $('.cart-list').html(`
                <tr>
        		    <th align="center">Item:</th>
        		   	<th align="center">Quantity:</th>
        		   	<th align="center">Price:</th>
        		   	<th align="center">Total:</th>
        		</tr>`
        		);
            for (var i = 0; i < cart[0].length; i++) {
                $('.cart-list').append('<tr><td>' + cart[3][i] + '</td><td>' + cart[2][i] + '</td><td>$' + cart[1][i] + '</td><td>$' + cart[1][i]*cart[2][i] + '</td><td><button id=' + delCount + ' class="delete-item">Delete</button><td></tr>');
                delCount++;
            }
             $('.delete-item').click(function() {
                cartDelete.call(this);
            });
    }
    
    function cartDelete() {
        for (var k = 0; k < cart.length; k++) {
            cart[k].splice(parseInt($(this).attr('id')),1);
        }
        $('.item-count').html('(' + (cart[0].length) + ' items)');
        showCart();
    }
    
    $('.cart').click(function() {
        if (cartToggle === false) {
            showCart();
           
            cartToggle = true;
        }
    });
    
    $('#cart-exit').click(function() {
        if (cartToggle === true) {
            $('#show-cart').removeClass('cart-contents');
            $('#show-cart').addClass('cart-contents-hidden');
            $('#cart-background').removeClass('overlay');
            $('#cart-exit').removeClass('exit-shown');
            $('#cart-exit').addClass('exit-hidden');
            cartToggle = false;
            $('.cart-list').html(`
                <tr>
				    <th>Item:</th>
			    	<th>Quantity:</th>
			    	<th>Price:</th>
			    	<th>Total:</th>
			    </tr>`);
        }
    });
    
    $('#show-cart').on('click', '.delete-item', function(e) {
       for (var k = 0; k < cart.length; k++) {
            cart[k][parseInt(this.attr('id'))].splice(parseInt(this.attr('id')),1);
       }
    });
    
})