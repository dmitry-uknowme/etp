namespace $.$$ {
  export class $etp_procedure_process_space_bids extends $.$etp_procedure_process_space_bids {
    bid_statuses(): readonly string[] {
      return ["NEW", "ACCEPTED", "REJECTED"];
    }

    bid_status(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.status(next);
    }

    @$mol_mem
    bid_list() {
      return this.space()
        .bid_list()
        .map((obj) => this.Bid(obj));
    }

    bid_title(obj: $etp_procedure_process_bid, next?: string) {
      return obj.title(next);
    }

    bid_number(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.number(next);
    }

    @$mol_mem
    allow_edit(next?: boolean): boolean {
      if (next !== undefined) {
        return next;
      } else {
        const Role = $etp_procedure_process_person_role;
        const isParticipant = this.person().role() === Role.PARTICIPANT;
        // const isOrganizer = this.person().role() === Role.ORGANIZER;
        if (isParticipant) {
          return true;
        }
        return false;
      }
    }

    // @$mol_mem
    // bid_send_moment(obj: $etp_procedure_process_bid, next?: $mol_time_moment): string {
    //   console.log("nnnn", next);
    //   //   const str = (next && next.toString()) as string;
    //   //   console.log("sttttrr", str);
    //   return obj.send_moment(next?.toString());
    //   //   return str ? new $mol_time_moment(str) : null;
    // }
  }
}
