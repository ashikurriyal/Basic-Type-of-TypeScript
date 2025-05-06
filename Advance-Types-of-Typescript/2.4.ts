{
    //Interface - generic

    interface Developer <T,X = null> {
        name: string,
        device: {
            brand: string,
            model: string;
            releaseYear: number

        }
        smartWatch: T,
        bike?: X
    }

    type HonorWatch = {brand: string, model:string, display: string}

    const randomDeveloper1: Developer<HonorWatch> = {
        name: 'Samir',
        device: {
            brand : 'Macbook',
            model: 'Pro',
            releaseYear: 2010
        },
        smartWatch : {
            brand: 'HONOR',
            model: 'X pro 60',
            display: "OLED",
        }

    }

    interface FeedbackWatch {
        brand: string,
        model: string,
        heartBitTrack: boolean,
        sleepTimerTrack: boolean
    }

    interface YamahaBike {
        model: string,
        engineCapacity: string
    }
    const randomDeveloper2: Developer<FeedbackWatch, YamahaBike> = {
        name: 'Tanvir',
        device: {
            brand : 'Asus',
            model: 'Habijabi',
            releaseYear: 2017
        },
        smartWatch : {
            brand: 'Feedback',
            model: '9 lite',
            // display: "OLED"
            heartBitTrack: true,
            sleepTimerTrack: true,
        },
        bike: {
            model: 'YAMAHA',
            engineCapacity: '100cc'
        }

    }







}