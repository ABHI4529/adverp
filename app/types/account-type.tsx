export interface Address {
    label : string;
    address: string;
    village?: string;
    city?: string;
    state?: string;
    pinCode?: string;
    route?: string;
}

export interface Licenses {
    licensesType: string;
    licenseNumber: string;
}

export interface BankModel {
    bankName: string;
    branchName: string;
    accountNumber: string;
    ifscCode: string;
}

export interface AccountType {
    id : string;
    account_name : string;
    account_group : string | string[];
    op_bal : number;
    bal_type : string;
    userId : string;
    category : string;
    address : Address[];
    contact : string;
    email : string;
    licenses : Licenses[];
    gstNo : string;
    gstType : string;
    isECom : boolean;
    isTransporter : boolean;
    msmeUdyam : string;
    bankDetails : BankModel;
    stopInvoice : boolean;
    dueOn : string;
    typeOfTax : string;
    transactionCode : string;
    pricingLevel : string;
    balanceType : string;
    defaultCrDays : number;
    creditLimit : number;
}
