import { z } from 'zod';


export const addressSchema = z.object({
    label : z.string(),
    address: z.string(),
    village: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pinCode: z.string().optional(),
    route: z.string().optional()
});

export const licensesSchema = z.object({
    licensesType: z.string(),
    licenseNumber: z.string(),
});

export const bankDetailsSchema = z.object({
    bankName: z.string(),
    branchName: z.string(),
    accountNumber: z.string(),
    ifscCode: z.string()
});

export const accountSchema = z.object({
    id: z.string(),
    account_name: z.string(),
    account_group: z.string(),
    op_bal: z.number(),
    bal_type: z.string(),
    category: z.string(),
    address: z.array(addressSchema),
    contact: z.string(),
    email: z.string(),
    licenses: z.array(licensesSchema),
    gstNo: z.string(),
    gstType: z.string(),
    isECom: z.boolean(),
    isTransporter: z.boolean(),
    msmeUdyam: z.string(),
    bankDetails: bankDetailsSchema,
    stopInvoice: z.boolean(),
    dueOn: z.string(),
    typeOfTax: z.string(),
    transactionCode: z.string(),
    pricingLevel: z.string(),
    balanceType: z.string(),
    defaultCrDays: z.number(),
    creditLimit: z.number()
});
