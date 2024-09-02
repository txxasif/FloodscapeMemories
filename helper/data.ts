import { NotificationItem } from "@/types";
import { url } from "inspector";
let Persons = {
  Galib: { url: "/Galib.jpg", name: "অভিনেতা", nickName: "Galib" },
  Tushar: { url: "/Tushar.jpg", name: "Animal", nickName: "Tushar" },
  Rimon: { url: "/Rimon.jpg", name: "অনিকের আত্মা 💀", nickName: "Rimon" },
  Anik: { url: "/Anik.jpg", name: "লেয়াজু", nickName: "Anik" },
  Jidan: { url: "/Jidan.jpg", name: "হিমু", nickName: "Jidan" },
  Lincon: { url: "/Lincon.jpg", name: "কাগা", nickName: "Lincon" },
  Sakib: { url: "/Sakib.jpg", name: "সাকিব সাহেব", nickName: "Sakib" },
};

export let notifications: NotificationItem[] = [
  {
    name: Persons.Lincon.name,
    message: "কন্ডে বেক?",
    time: "3:30 PM",
    icon: Persons.Lincon.url,
  },
  {
    name: Persons.Sakib.name,
    message: "তোগ্গ উলি ত্তে।    ",
    time: "3: 31 PM",
    icon: Persons.Sakib.url,
  },
  {
    name: Persons.Jidan.name,
    message: "মতিগঞ্জ আইয়ের..",
    time: "5m ago",
    icon: Persons.Jidan.url,
  },
  {
    name: Persons.Rimon.name,
    message: "কাগার দোয়ানে আইয়ো",
    time: "2m ago",
    icon: Persons.Rimon.url,
  },
];

export let photoSectionData = [
  {
    name: Persons.Galib.nickName,
    url: Persons.Galib.url,
    khrapName: Persons.Galib.name,
  },
  {
    name: Persons.Tushar.nickName,
    url: Persons.Tushar.url,
    khrapName: Persons.Tushar.name,
  },
  {
    name: Persons.Rimon.nickName,
    url: Persons.Rimon.url,
    khrapName: Persons.Rimon.name,
  },
  {
    name: Persons.Anik.nickName,
    url: Persons.Anik.url,
    khrapName: Persons.Anik.name,
  },
  {
    name: Persons.Jidan.nickName,
    url: Persons.Jidan.url,
    khrapName: Persons.Jidan.name,
  },
  {
    name: Persons.Lincon.nickName,
    url: Persons.Lincon.url,
    khrapName: Persons.Lincon.name,
  },
  {
    name: Persons.Sakib.nickName,
    url: Persons.Sakib.url,
    khrapName: Persons.Sakib.name,
  },
];
