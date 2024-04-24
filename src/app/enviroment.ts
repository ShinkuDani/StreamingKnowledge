
export class enviroment {
    streamingAvUrl: string
    streamingAvOptions: object

    constructor(){
        this.streamingAvUrl = 'https://streaming-availability.p.rapidapi.com/search/title?title=Batman&country=us&show_type=all&output_language=en'

        this.streamingAvOptions = {
            'X-RapidAPI-Key': '',
		    'X-RapidAPI-Host': ''
        }
    }
}


export const streamingAva = {

    streamingAvBaseUrl: 'https://streaming-availability.p.rapidapi.com/search/title?title=',
    streamingAvaBaseContUrl:'&country=us&show_type=all&output_language=en',
    streamingAvaBaseBatmanUrl:'https://streaming-availability.p.rapidapi.com/search/title?title=Batman&country=us&show_type=all&output_language=en',




    XRapidAPIHostHeaderName: 'RapidAPI-Host',
    XRapidAPIHostHeaderValue: '',

    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: ''

}