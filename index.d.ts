/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface Point {
  x: number
  y: number
}
export interface Rect {
  left: number
  top: number
  right: number
  bottom: number
}
export interface Color {
  r: number
  g: number
  b: number
}
export const MAGENTA: Color
export function readImageData(path: string): Promise<ImageData>
export function writeImageData(path: string, imageData: ImageData): Promise<void>
export function imageSearch(source: ImageData, target: ImageData, variant?: number | undefined | null, transColor?: Color | undefined | null): Promise<Point | null>
export function multipleImageSearch(source: ImageData, target: ImageData, variant?: number | undefined | null, transColor?: Color | undefined | null): Promise<Array<Point>>
export const enum Modifiers {
  Alt = 1,
  AltGraph = 2,
  CapsLock = 4,
  Control = 8,
  Fn = 16,
  FnLock = 32,
  Meta = 64,
  NumLock = 128,
  ScrollLock = 256,
  Shift = 512,
  Symbol = 1024,
  SymbolLock = 2048,
  Hyper = 4096,
  Super = 8192
}
export const enum Key {
  None = 0,
  Back = 8,
  Tab = 9,
  LineFeed = 10,
  Clear = 12,
  Enter = 13,
  Shift = 16,
  Control = 17,
  Alt = 18,
  Pause = 19,
  CapsLock = 20,
  Esc = 27,
  Space = 32,
  PageUp = 33,
  PageDown = 34,
  End = 35,
  Home = 36,
  ArrowLeft = 37,
  ArrowUp = 38,
  ArrowRight = 39,
  ArrowDown = 40,
  Insert = 45,
  Delete = 46,
  D0 = 48,
  D1 = 49,
  D2 = 50,
  D3 = 51,
  D4 = 52,
  D5 = 53,
  D6 = 54,
  D7 = 55,
  D8 = 56,
  D9 = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  LeftWin = 91,
  RightWin = 92,
  Apps = 93,
  Sleep = 95,
  NumPad0 = 96,
  NumPad1 = 97,
  NumPad2 = 98,
  NumPad3 = 99,
  NumPad4 = 100,
  NumPad5 = 101,
  NumPad6 = 102,
  NumPad7 = 103,
  NumPad8 = 104,
  NumPad9 = 105,
  Multiply = 106,
  Add = 107,
  Separator = 108,
  Subtract = 109,
  Decimal = 110,
  Divide = 111,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  F13 = 124,
  F14 = 125,
  F15 = 126,
  F16 = 127,
  F17 = 128,
  F18 = 129,
  F19 = 130,
  F20 = 131,
  F21 = 132,
  F22 = 133,
  F23 = 134,
  F24 = 135,
  NumLock = 144,
  ScrollLock = 145,
  LeftShift = 160,
  RightShift = 161,
  LeftControl = 162,
  RightControl = 163,
  LeftAlt = 164,
  RightAlt = 165
}
export const enum MouseButton {
  Left = 0,
  Right = 1,
  Middle = 2
}
export function registerHotkey(mods: Array<Modifiers>, key: Key, callback: (...args: any[]) => any): number
export function unregisterHotkey(id: number): void
export function mouseMove(x: number, y: number): Promise<boolean>
export function mousePress(button: MouseButton): Promise<boolean>
export function mouseRelease(button: MouseButton): Promise<boolean>
export function mouseClick(button: MouseButton, x: number, y: number): Promise<boolean>
export function keyClick(key: Key): Promise<boolean>
export function keyPress(key: Key): Promise<boolean>
export function keyRelease(key: Key): Promise<boolean>
export function getMousePosition(): Promise<Point>
export function typeText(text: string): Promise<void>
export function getScreenSize(): Promise<Point>
export function takeScreenshot(x: number, y: number, width: number, height: number): Promise<ImageData>
export function getForegroundWindow(): Promise<Window | null>
export function findWindowByTitle(title: string): Promise<Window | null>
export function findWindowByClassName(classname: string): Promise<Window | null>
export interface Process {
  pid: number
  name: string
}
export function getProcesses(): Promise<Array<Process>>
export class ImageData {
  data: Array<number>
  width: number
  height: number
  pixelWidth: number
}
export class Window {
  setMinimize(): Promise<void>
  setMaximize(): Promise<void>
  getTitle(): Promise<string>
  getWindowRect(): Promise<Rect>
  setPosition(x: number, y: number): Promise<void>
  setSize(width: number, height: number): Promise<void>
  setForeground(): Promise<boolean>
}
