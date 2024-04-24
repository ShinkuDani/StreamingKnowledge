
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
    XRapidAPIHostHeaderValue: 'streaming-availability.p.rapidapi.com',

    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: 'eac50420e3mshc08f6116cdcb62bp1fb998jsn1fc8467e433d'

}