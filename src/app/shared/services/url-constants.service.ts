import { Injectable } from '@angular/core';


export class UrlConstants{
    nteProd: string;
    nteStaging: string;
    applyLocalDocker: string;
    environmentRoot: string;
    localApi: string;
    stagingApi: string;
    prodApi: string;

    constructor(){

        this.localApi = "http://localdocker/v1";
        this.stagingApi = "https://api-staging.nexttiereducation.com/v1";
        this.prodApi = "https://api.nexttiereducation.com/v1"
    }
    
    getBaseUrl(){
        //TODO: add in url or env logic. use staging for now
        return this.stagingApi;
    }
}