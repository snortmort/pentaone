import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
    const data = 
    [
        {
            "data": {
                "name": "Applications",
                "size": "200mb",
                "type": "Folder"
            },
            label: 'Applications',
            "children": [
                {
                    "data": {
                        "name": "Angular",
                        "size": "25mb",
                        "type": "Folder"
                    },
                    label: 'Angular',
                    "children": [
                        {
                            "data": {
                                "name": "angular.app",
                                "size": "10mb",
                                "type": "Application"
                            },
                            label: 'angular.app',
                        },
                        {
                            "data": {
                                "name": "cli.app",
                                "size": "10mb",
                                "type": "Application"
                            },
                            label: "cli.app",
                        },
                        {
                            "data": {
                                "name": "mobile.app",
                                "size": "5mb",
                                "type": "Application"
                            },
                            label: "mobile.app",
                        }
                    ]
                },
                {
                    "data": {
                        "name": "editor.app",
                        "size": "25mb",
                        "type": "Application"
                    },
                    label: "editor.app",
                },
                {
                    "data": {
                        "name": "settings.app",
                        "size": "50mb",
                        "type": "Application"
                    },
                    label: "settings.app",
                }
            ]
        },
        {
            "data": {
                "name": "Cloud",
                "size": "20mb",
                "type": "Folder"
            },
            label: "Cloud",
            "children": [
                {
                    "data": {
                        "name": "backup-1.zip",
                        "size": "10mb",
                        "type": "Zip"
                    },
                    label: "backup-1.zip",
                },
                {
                    "data": {
                        "name": "backup-2.zip",
                        "size": "10mb",
                        "type": "Zip"
                    },
                    label: "backup-2.zip",
                }
            ]
        },
        {
            "data": {
                "name": "Desktop",
                "size": "150kb",
                "type": "Folder"
            },
            label: "Desktop",
            "children": [
                {
                    "data": {
                        "name": "note-meeting.txt",
                        "size": "50kb",
                        "type": "Text"
                    },
                    label: "note-meeting.txt",
                },
                {
                    "data": {
                        "name": "note-todo.txt",
                        "size": "100kb",
                        "type": "Text"
                    },
                    label: "note-todo.txt",
                }
            ]
        },
        {
            "data": {
                "name": "Documents",
                "size": "75kb",
                "type": "Folder"
            },
            label: "Documents",
            "children": [
                {
                    "data": {
                        "name": "Work",
                        "size": "55kb",
                        "type": "Folder"
                    },
                    label: "Work",
                    "children": [
                        {
                            "data": {
                                "name": "Expenses.doc",
                                "size": "30kb",
                                "type": "Document"
                            },
                            label: "Expenses.doc",
                        },
                        {
                            "data": {
                                "name": "Resume.doc",
                                "size": "25kb",
                                "type": "Resume"
                            },
                            label: "Resume.doc",
                        }
                    ]
                },
                {
                    "data": {
                        "name": "Home",
                        "size": "20kb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "Invoices",
                                "size": "20kb",
                                "type": "Text"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "data": {
                "name": "Downloads",
                "size": "25mb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "Spanish",
                        "size": "10mb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "tutorial-a1.txt",
                                "size": "5mb",
                                "type": "Text"
                            }
                        },
                        {
                            "data": {
                                "name": "tutorial-a2.txt",
                                "size": "5mb",
                                "type": "Text"
                            }
                        }
                    ]
                },
                {
                    "data": {
                        "name": "Travel",
                        "size": "15mb",
                        "type": "Text"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "Hotel.pdf",
                                "size": "10mb",
                                "type": "PDF"
                            }
                        },
                        {
                            "data": {
                                "name": "Flight.pdf",
                                "size": "5mb",
                                "type": "PDF"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "data": {
                "name": "Main",
                "size": "50mb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "bin",
                        "size": "50kb",
                        "type": "Link"
                    }
                },
                {
                    "data": {
                        "name": "etc",
                        "size": "100kb",
                        "type": "Link"
                    }
                },
                {
                    "data": {
                        "name": "var",
                        "size": "100kb",
                        "type": "Link"
                    }
                }
            ]
        },
        {
            "data": {
                "name": "Other",
                "size": "5mb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "todo.txt",
                        "size": "3mb",
                        "type": "Text"
                    }
                },
                {
                    "data": {
                        "name": "logo.png",
                        "size": "2mb",
                        "type": "Picture"
                    }
                }
            ]
        },
        {
            "data": {
                "name": "Pictures",
                "size": "150kb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "barcelona.jpg",
                        "size": "90kb",
                        "type": "Picture"
                    }
                },
                {
                    "data": {
                        "name": "primeng.png",
                        "size": "30kb",
                        "type": "Picture"
                    }
                },
                {
                    "data": {
                        "name": "prime.jpg",
                        "size": "30kb",
                        "type": "Picture"
                    }
                }
            ]
        },
        {
            "data": {
                "name": "Videos",
                "size": "1500mb",
                "type": "Folder"
            },
            "children": [
                {
                    "data": {
                        "name": "primefaces.mkv",
                        "size": "1000mb",
                        "type": "Video"
                    }
                },
                {
                    "data": {
                        "name": "intro.avi",
                        "size": "500mb",
                        "type": "Video"
                    }
                }
            ]
        }
    ]

    ;
    return {heroes, data};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}