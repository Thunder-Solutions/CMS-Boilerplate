import { AnchorHTMLAttributes, DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export type GenericObj = { [key: PropertyKey]: unknown };
export type GenericFn = (...args: unknown[]) => unknown;
export type ValueOf<T> = T[keyof T];
export type ReactState<T> = [T, Dispatch<SetStateAction<T>>];

// DEFAULT TAG PROPS
export type DivTagProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type SpanTagProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
export type HeadingTagProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export type ButtonTagProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type FormTagProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export type InputTagProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type FieldsetTagProps = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
export type LabelTagProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
export type SelectTagProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export type TextareaTagProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export type AnchorTagProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type DialogTagProps = DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
