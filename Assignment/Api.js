const token = 'BQAG9YF1CIri_fIOuep2v_6uz-EjetOcI-70Zfx2cmxyQnbPfQJsgz31omOuiMGYYA7Y4j-GAgqQZljzzY3DB0lsMbwo645ZZI1WnPh_R8mcXFQAH9HO9H20jYSzD0271St1_EysSZmXOAZw1N74rh3Vp1nvLBe0qjb71NWkJKT0icoHU63Krz6LaVnSKl8-h4Ecc0Uw008-t4wouoMnvxcu0gnqD5f2jEEsT4of2Lw61hNt6kLwl6Nci1CWDXW1riynE2spWjuGqp_NmMoHy_KF';
const url = "https://api.spotify.com/v1/artists?ids=1urtr0Wr3oFJVeTMF2aqPm%2C1BIAyVQxDuYrMqZ8H1Faja%2C6umn0ODoYa5UsGpswA99gx%2C4tejKImNVmDcORNBuZ1l14%2C1H4ZvA2yyK7wCmbvEUWvPn%2C5DxwUWyGp1uejyE80iJcn0%2C0L5f9aJIaxQXTipZ7uQYiC%2C26R3WRFIf6FbbNAQuMIjkN%2C1mBydYMVBECdDmMfE2sEUO%2C1OPqAyxsQc8mcRmoNBAnVk"
const request = new Request(

    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })

async function getData(){
    try{
        const response = await fetch(request) 
        const data = await response.json()
        if(response.status == 200) {
            const artistList = document.getElementById('Name');

            // Loop through the data and create list items
            data.artists.forEach(artist => {
                const listItem = document.createElement('li');
                listItem.textContent = artist.name;
                artistList.appendChild(listItem);
            });

            console.log("Success : ", data)
        } else {
            console.log('Server Error : ', data.error.message)
        }
    } catch (error) {
        console.log('ERROR : ', error)
    }
    
}

getData()