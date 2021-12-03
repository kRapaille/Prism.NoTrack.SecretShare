export interface SecretContent {
    secret: string;
}

export interface PlainContent
{
    text: string;
}

export interface EncryptedContent
{
    encrypted: string;
    iv: string;
    passPhrase: string;
}