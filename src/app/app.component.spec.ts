import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let mockAuthService: jasmine.SpyObj<ApiService>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('ApiService', ['getData']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ApiService,
          useValue: mockAuthService,
        },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({
      title: ['', Validators.required],
      type: ['donut', Validators.required],
    });
    fixture.detectChanges();
  });

  it('should test form validity', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    const title = form.controls.title;
    title.setValue('I am Leonard');
    expect(form.valid).toBeTruthy();
  });

  it('should test title validity', () => {
    const title = component.form.controls.title;
    expect(title.valid).toBeFalsy();

    title.setValue('John Peter');
    expect(title.valid).toBeTruthy();
  });

  it('should test type validity', () => {
    const type = component.form.controls.type;
    expect(type.valid).toBeTruthy();

    type.setValue('Pie');
    expect(type.valid).toBeTruthy();
  });

  it('should test input errors', () => {
   const title = component.form.controls.title;
   expect(title.errors.required).toBeTruthy();

   title.setValue('John Peter');
   expect(title.errors).toBeNull();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
