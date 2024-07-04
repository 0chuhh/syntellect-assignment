import { CountryInfo, getCountryByName } from "api/apiService";
import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class CountryInfoStore {
    cointriesInfo?: IPromiseBasedObservable<CountryInfo[]>;

    constructor() {
        makeAutoObservable(this);
    }

    getCountriesInfo(countryName: string) {
        this.cointriesInfo = fromPromise(getCountryByName({ countryName }));
    }

}

export default new CountryInfoStore();