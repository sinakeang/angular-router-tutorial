import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  // ActivatedRoute injects the currently activated route
  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // User relative path but this time there's no error since
    // unlike the navigate link, the router link does not know the link you are concurrently on?
    // the router link always knows in which component it seats?
    // by default relativeTo uses the root domain
    // relativeTo: this.route let NG know what our currently activated route is
    // currently this will break the link as NG assume we want this route
    // which is /servers, then we navigate to servers which becomes /servers/servers resulting
    // in error.
    // The point here is to show how one would create a relative route base this component.
    // this.router.navigate(['servers'], {relativeTo: this.route}); keep for reference

    
  }

}
