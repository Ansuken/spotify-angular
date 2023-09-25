import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent]
        });
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render list', () => {
        const list = fixture.nativeElement.querySelector('ul');
        expect(list).toBeTruthy();
    });

    /* it('should render list items', () => {
        component.list = ['item1', 'item2', 'item3'];
        const listItems = fixture.nativeElement.querySelectorAll('li');
        expect(listItems.length).toBe(3);
    }); */
});
